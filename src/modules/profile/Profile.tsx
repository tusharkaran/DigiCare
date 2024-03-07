import React, { useState } from "react";
import "./Profile.scss";

export const DigiProfile = () => {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(30);
    const [gender, setGender] = useState("Male");
    const [address, setAddress] = useState("123 Main St, City, Country");
    const [phoneNumber, setPhoneNumber] = useState("+2269759869");
    const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    const [profilePicture, setProfilePicture] = useState("	https://res.cloudinary.com/dqdpwdoxs/image/upload/v1705202195/cld-sample-3.jpg  ");

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    const handleSave = () => {
        setEditMode(false);
        // Perform save operation here (e.g., update data on the server)
    };
    // useEffect(() => {
    //     const fetchProfileData = async () => {
    //         try {
    //             const response = await fetch("api/profile");
    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch profile data");
    //             }
    //             const data = await response.json();
    //             setName(data.name);
    //             setAge(data.age);
    //             setGender(data.gender);
    //             setAddress(data.address);
    //             setPhoneNumber(data.phoneNumber);
    //             setDescription(data.description);
    //             setProfilePicture(data.profilePicture);
    //         } catch (error) {
    //             console.error("Error fetching profile data:", error);
    //         }
    //     };

    //     fetchProfileData();
    // }, []);

    return (
        <div className="profile-card">
            <div>
                <img src={profilePicture} alt={name} className="profile-avatar" />
            </div>
            <div className="profile-details">
                <h1 className="profile-name">{name}</h1>
                <div className="profile-field">
                    <span className="field-label">Age:</span>
                    {editMode ? (
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(parseInt(e.target.value))}
                            className="field-input"
                        />
                    ) : (
                        <span className="field-value">{age}</span>
                    )}
                </div>
                <div className="profile-field">
                    <span className="field-label">Gender:</span>
                    {editMode ? (
                        <input
                            type="text"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="field-input"
                        />
                    ) : (
                        <span className="field-value">{gender}</span>
                    )}
                </div>
                <div className="profile-field">
                    <span className="field-label">Address:</span>
                    {editMode ? (
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="field-input"
                        />
                    ) : (
                        <span className="field-value">{address}</span>
                    )}
                </div>
                <div className="profile-field">
                    <span className="field-label">Phone Number:</span>
                    {editMode ? (
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="field-input"
                        />
                    ) : (
                        <span className="field-value">{phoneNumber}</span>
                    )}
                </div>
                <div className="profile-field">
                    <span className="field-label">Description:</span>
                    {editMode ? (
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                            className="field-textarea"
                        ></textarea>
                    ) : (
                        <p className="field-value">{description}</p>
                    )}
                </div>
            </div>
            <div className="profile-buttons">
                {editMode ? (
                    <button className="save-button" onClick={handleSave}>Save</button>
                ) : (
                    <button className="edit-button" onClick={handleEdit}>Edit Profile</button>
                )}
            </div>
        </div>
    );
};
