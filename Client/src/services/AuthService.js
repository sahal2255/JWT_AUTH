import axiosInstance from '../utils/axiosInstance'


export const UserLogin = async (data) => {
    try {
        console.log('Sending data:', data); // Log the data being sent
        const response = await axiosInstance.post('/userlogin', data);
        console.log('Response from backend:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error in UserLogin service:', error.response?.data || error.message);
    }
};
