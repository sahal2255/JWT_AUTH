const jwt = require('jsonwebtoken');
const { generateAccess } = require('../utils/generateTokens');

const tokenAuth = (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    // If neither token is present
    if (!accessToken && !refreshToken) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    // Verify Access Token
    jwt.verify(accessToken, process.env.ACCESS_SECRET, (err, decoded) => {
        if (err && err.name === 'TokenExpiredError') {
            // Access token expired, validate the refresh token
            if (refreshToken) {
                jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, refreshDecoded) => {
                    if (err) {
                        return res.status(403).json({ message: 'Invalid refresh token. Please log in again.' });
                    }

                    // Refresh token is valid, issue a new access token
                    const newAccessToken = generateAccess({ id: refreshDecoded.id, email: refreshDecoded.email });
                    res.cookie('accessToken', newAccessToken, {
                        httpOnly: true,
                        sameSite: 'strict',
                        secure: false, // Change to `true` in production for HTTPS
                    });

                    // Set user in request object and proceed
                    req.user = { id: refreshDecoded.id, email: refreshDecoded.email };
                    next();
                });
            } else {
                return res.status(401).json({ message: 'Refresh token not found. Please log in again.' });
            }
        } else if (err) {
            return res.status(403).json({ message: 'Invalid access token' });
        } else {
            // Access token is valid
            req.user = decoded;
            next();
        }
    });
};

module.exports =  tokenAuth ;
