import React, {useState,useEffect} from 'react';
import './profileCollegeGoing.css';
import { useSelector , useDispatch} from 'react-redux';
import Logo from './Images/logo.jpg';
import axios from 'axios';
import { updateUserName ,updateEmail, updateCollege, updateBranch, updateAddress, updateGraduationYear} from "./actions/authActions";

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
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [newName, setNewName] = useState(userData.name);
    const [newAddress, setNewAddress] = useState(userData.address);
    const [newEmail, setNewEmail] = useState(userData.email);
    const dispatch = useDispatch();

    const handleNameEdit = () => {
        setIsEditingName(true);
    };

    const handleAddressEdit = () => {
        setIsEditingAddress(true);
    };

    const handleEmailEdit = () => {
        setIsEditingEmail(true);
    };

    const handleNameSubmit = () => {
        axios.patch(`http://localhost:3001/profile/updateName/${userData.email}`, {  name: newName })
            .then(response => {
                console.log(response.data);
                dispatch(updateUserName(newName)); 
                setIsEditingName(false);
            })
            .catch(error => {
                console.error('Error updating name:', error);
            });
    };

    const handleAddressSubmit = () => {
        axios.patch(`http://localhost:3001/profile/updateAddress/${userData.email}`, { address: newAddress })
            .then(response => {
                console.log(response.data);
                dispatch(updateAddress(newAddress));
                setIsEditingAddress(false);
            })
            .catch(error => {
                console.error('Error updating address:', error);
            });
    };

    const handleEmailSubmit = () => {
        axios.patch(`http://localhost:3001/profile/updateEmail/${userData.email}`, { newEmail: newEmail })
            .then(response => {
                console.log(response.data);
                dispatch(updateEmail(newEmail));
                setIsEditingEmail(false);
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
                    <p className="profile_data_rows">Address</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: "5px" }}>
                    {isEditingAddress ? (
                        <>
                            <input type="text" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} className="profile-data-values" />
                            <button className="edit-button" onClick={handleAddressSubmit}>Save</button>
                        </>
                    ) : (
                        <>
                            <p className="profile-data-values">{userData.address}</p>
                            <button className="edit-button" onClick={handleAddressEdit}>Edit</button>
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
        </div>
    );
}

  function ProfessionalsSection({userData}){

    const [isEditingCollege, setIsEditingCollege] = useState(false);
    const [isEditingBranch, setIsEditingBranch] = useState(false);
    const [isEditingGraduationYear, setIsEditingGraduationYear] = useState(false);
    const [newCollege, setNewCollege] = useState(userData.college);
    const [newBranch, setNewBranch] = useState(userData.major);
    const [newGraduationYear, setNewGraduationYear] = useState(userData.graduationYear);

    const dispatch = useDispatch();

    const handleBranchEdit = () => {
        setIsEditingBranch(true);
    };

    const handleCollegeEdit = () => {
        setIsEditingCollege(true);
    };

    const handleGraduationYearEdit = () => {
        setIsEditingGraduationYear(true);
    };

    const handleBranchSubmit = () => {
        axios.patch(`http://localhost:3001/profile/updateBranch/${userData.email}`, { branch: newBranch })
            .then(response => {
                console.log(response.data);
                dispatch(updateBranch(newBranch));
                setIsEditingBranch(false);
            })
            .catch(error => {
                console.error('Error updating branch:', error);
            });
    };

    const handleCollegeSubmit = () => {
        axios.patch(`http://localhost:3001/profile/updateCollege/${userData.email}`, { newCollege: newCollege })
            .then(response => {
                console.log(response.data);
                dispatch(updateCollege(newCollege));
                setIsEditingCollege(false);
            })
            .catch(error => {
                console.error('Error updating college:', error);
            });
    };

    const handleGraduationYearSubmit = () => {
        axios.patch(`http://localhost:3001/profile/updateGraduationYear/${userData.email}`, { graduationYear: newGraduationYear })
            .then(response => {
                console.log(response.data);
                dispatch(updateGraduationYear(newGraduationYear));
                setIsEditingGraduationYear(false);
            })
            .catch(error => {
                console.error('Error updating graduation year:', error);
            });
    };

    return(
        <div className="professional">
            <p style={{textAlign: 'center', fontSize: '30px', marginTop: "15px",marginBottom:"15px", fontWeight:'500'}}>College Details</p>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Your Branch</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: "5px" }}>
                    {isEditingBranch ? (
                        <>
                            <input type="text" value={newBranch} onChange={(e) => setNewBranch(e.target.value)} className="profile-data-values" />
                            <button className="edit-button" onClick={handleBranchSubmit}>Save</button>
                        </>
                    ) : (
                        <>
                            <p className="profile-data-values">{userData.major}</p>
                            <button className="edit-button" onClick={handleBranchEdit}>Edit</button>
                        </>
                    )}
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Currently Studying at/Graduated from</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: "5px" }}>
                    {isEditingCollege ? (
                        <>
                            <input type="text" value={newCollege} onChange={(e) => setNewCollege(e.target.value)} className="profile-data-values" />
                            <button className="edit-button" onClick={handleCollegeSubmit}>Save</button>
                        </>
                    ) : (
                        <>
                            <p className="profile-data-values">{userData.college}</p>
                            <button className="edit-button" onClick={handleCollegeEdit}>Edit</button>
                        </>
                    )}
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Graduation Year</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', marginBottom: "5px" }}>
                    {isEditingGraduationYear ? (
                        <>
                            <input type="text" value={newGraduationYear} onChange={(e) => setNewGraduationYear(e.target.value)} className="profile-data-values" />
                            <button className="edit-button" onClick={handleGraduationYearSubmit}>Save</button>
                        </>
                    ) : (
                        <>
                            <p className="profile-data-values">{userData.graduationYear}</p>
                            <button className="edit-button" onClick={handleGraduationYearEdit}>Edit</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
  }

  function Opinions({userData}){
    return(
        <div className="opinions">
            <p style={{textAlign: 'center', fontSize: '30px', marginTop: "15px",marginBottom:"15px", fontWeight:'500'}}>Opinions</p>
            <div className="opinions_details">
                <div>
                    <p className="opinions_data_rows">Academics</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto', marginBottom:"5px"}}>
                    <p className="opinions-data-values">{userData.college}</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="opinions_details">
                <div>
                    <p className="opinions_data_rows">Extra Curricular Activities</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto', marginBottom:"5px"}}>
                    <p className="opinions-data-values">4 stars</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="opinions_details">
                <div>
                    <p className="opinions_data_rows">Placements</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto' , marginBottom:"5px"}}>
                    <p className="opinions-data-values">It is very good</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="opinions_details">
                <div>
                    <p className="opinions_data_rows">Overall</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto' , marginBottom:"5px"}}>
                    <p className="opinions-data-values">{userData.major}</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
        </div>
    );    
  }
export default CollegeGoingProfile;
