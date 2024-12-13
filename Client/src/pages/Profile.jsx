import React, { useState } from 'react';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'A passionate developer.',
        profilePicture: 'https://via.placeholder.com/150',
    });

    const [editProfile, setEditProfile] = useState({ ...profile });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setProfile(editProfile);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setEditProfile(profile);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditProfile({ ...editProfile, [name]: value });
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="text-center">
                <img
                    src={profile.profilePicture}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto"
                />
                {!isEditing && (
                    <>
                        <h2 className="text-2xl font-semibold mt-4">{profile.name}</h2>
                        <p className="text-gray-600">{profile.email}</p>
                        <p className="text-gray-500 mt-2">{profile.bio}</p>
                        <button
                            onClick={handleEditClick}
                            className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                        >
                            Edit Profile
                        </button>
                    </>
                )}
            </div>
            {isEditing && (
                <div className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={editProfile.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={editProfile.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Bio</label>
                        <textarea
                            name="bio"
                            value={editProfile.bio}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={handleCancelClick}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSaveClick}
                            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
