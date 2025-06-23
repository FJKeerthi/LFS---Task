import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Redirect to login if no user is found
      navigate('/');
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    console.log("User signed out");
    navigate("/");
  };

  if (!user) {
    return <div className="profile-wrapper">Loading profile...</div>;
  }

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <h2>My Profile</h2>
          </div>

          <div className="profile-details">
            <div className="detail-row">
              <label>Full Name:</label>
              <p>{user.name}</p>
            </div>

            <div className="detail-row">
              <label>Email:</label>
              <p>{user.email}</p>
            </div>
          </div>

          <div className="profile-actions">
            <button className="edit-button">
              Edit Profile
            </button>
            <button
              className="signout-button"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
