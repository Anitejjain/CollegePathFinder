import React, {useState,useEffect} from 'react';
import './profile.css';
import { useSelector , useDispatch} from 'react-redux';
import Logo from './Images/logo.jpg';
import axios from 'axios';

function CollegeGoingProfile(){
    const userData = useSelector(state => state.auth.user); 

    return(
      <div className="profile-container">
          <div className="profile">
              <ProfileSection userData={userData}/>
              <Opinions userData={userData}/>
          </div>
      </div>
    );
}

function ProfileSection({userData}){
    return (
        <div className="profile_details">
            <ProfilePhotoSection userData={userData}/>
            <ProfileDataSection userData={userData}/>
            <ProfessionalsSection userData={userData}/>
        </div>
    );
  }
  
  function ProfilePhotoSection({userData}){
    return (
        <div className="profile_photo">
            <div>
                <img src={Logo} className="photo" alt="Profile Photo"/>
            </div>
            <div >
                <div>
                    <button className="upload_photo">Upload Photo</button>
                </div>
                <div>
                    <p className="profile_verified">Verified</p>
                </div>
            </div>
        </div>
    );
  }
  
  function ProfileDataSection({ userData }) {
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [newName, setNewName] = useState(userData.name);
    const [newEmail, setNewEmail] = useState(userData.email);
    const dispatch = useDispatch();

    useEffect(() => {
        setNewName(userData.name);
    }, [userData.name]);

    const handleNameEdit = () => {
        setIsEditingName(true);
    };

    const handleEmailEdit = () => {
        setIsEditingEmail(true);
    };
    const handleNameSubmit = () => {

        axios.patch(`http://localhost:3001/profile/updateName/${userData.email}`, {  name: newName })
            .then(response => {
                console.log(response.data);
                setIsEditingName(false);
                setNewName("");
            })
            .catch(error => {
                console.error('Error updating name:', error);
            });
    };

    const handleEmailSubmit = () => {
        axios.patch(`http://localhost:3001/profile/updateEmail/${userData.email}`, { newEmail: newEmail })
            .then(response => {
                console.log(response.data);
                setIsEditingEmail(false);
                setNewEmail("");
            })
            .catch(error => {
                console.error('Error updating email:', error);
            });
    };

    return (
        <div className="professional">
            <p style={{ textAlign: 'center', fontSize: '30px', marginTop: "15px", marginBottom: "15px", fontWeight: '500' }}>Personal Details</p>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Your Name</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: "5px" }}>
                    {isEditingName ? (
                        <>
                            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className="profile-data-values" />
                            <button className="edit-button" onClick={handleNameSubmit}>Save</button>
                        </>
                    ) : (
                        <>
                            <p className="profile-data-values">{userData.name}</p>
                            <button className="edit-button" onClick={handleNameEdit}>Edit</button>
                        </>
                    )}
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Email</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: "5px" }}>
                    {isEditingEmail ? (
                        <>
                            <input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} className="profile-data-values" />
                            <button className="edit-button" onClick={handleEmailSubmit}>Save</button>
                        </>
                    ) : (
                        <>
                            <p className="profile-data-values">{userData.email}</p>
                            <button className="edit-button" onClick={handleEmailEdit}>Edit</button>
                        </>
                    )}
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Address</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: "5px" }}>
                    <p className="profile-data-values">Pune</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
        </div>
    );
}

  function ProfessionalsSection({userData}){
    return(
        <div className="professional">
            <p style={{textAlign: 'center', fontSize: '30px', marginTop: "15px",marginBottom:"15px", fontWeight:'500'}}>College Details</p>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Currently Studying at/Graduated from</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto', marginBottom:"5px"}}>
                    <p className="profile-data-values">{userData.college}</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Rate Your College</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto', marginBottom:"5px"}}>
                    <p className="profile-data-values">4 stars</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Your Branch</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto' , marginBottom:"5px"}}>
                    <p className="profile-data-values">{userData.major}</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
        </div>
    );
  }

  function Opinions({userData}){
    return(
        <div className="professional">
            <p style={{textAlign: 'center', fontSize: '30px', marginTop: "15px",marginBottom:"15px", fontWeight:'500'}}>Opinions</p>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Academics</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto', marginBottom:"5px"}}>
                    <p className="profile-data-values">{userData.college}</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Extra Curricular Activities</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto', marginBottom:"5px"}}>
                    <p className="profile-data-values">4 stars</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Placements</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto' , marginBottom:"5px"}}>
                    <p className="profile-data-values">It is very good</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Overall</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto' , marginBottom:"5px"}}>
                    <p className="profile-data-values">{userData.major}</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
        </div>
    );    
  }
export default CollegeGoingProfile;