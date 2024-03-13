import React from 'react';
import './profile.css';
import { useSelector } from 'react-redux';
import Logo from './Images/logo.jpg';
import ProfileCollegeGoing from './profileCollegeGoing'
import Report from './Images/report.jpg';

const Profile = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Get user authentication state from Redux store
  const userData = useSelector(state => state.auth.user); // Get user data from Redux store

  return (
    <div>
      {isLoggedIn ? (
        <ShowProfile userData={userData} />
      ) : (
        <p>Please login to view your profile</p>
      )}
    </div>
  );
};

function ShowProfile({ userData }) {

  if (userData.userType === "G") {
     return (
        <div>
            <ProfileCollegeGoing />
        </div>
      );
  } else if (userData.userType === "S") {
     return (
        <div>
            <CollegeSearchingProfile userData={{userData}}/>
        </div>
      );
  } else {
     return (
      <div>
          <AdminProfile userData={{userData}}/>
      </div>
     );
  }
}

function CollegeSearchingProfile({userData}){
  
}

function AdminProfile({userData}){
  
}

export default Profile;