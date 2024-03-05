import Logo from "../Images/Logo.png";
import report from "../Images/report.jpg";
import "./Profile.css";

function Profile(){
    return (   
        <>
        <div className="profile-container">
            <div className="profile">
                <ProfileSection/>
                <ProfessionalsSection/>
                <ReportSection/>
            </div>
        </div>
        </>
    );
}

function ProfileSection(){
    return (
        <div className="profile_details">
            <ProfilePhotoSection/>
            <ProfileDataSection/>
            <ProfileBookmarkSection/>
        </div>
    );
}

function ProfilePhotoSection(){
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

function ProfileDataSection(){
    return (
        <div className="profile_data">
            <div>
                <div>
                    <p className="profile_data_rows">Your Name</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="profile-data-values">Jon</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>   
            <div >
                <div>
                    <p className="profile_data_rows">Email</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="profile-data-values">jon@gmail.com</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>   
            <div>
                <div>
                    <p className="profile_data_rows">Phone No.</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="profile-data-values">1234567890</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>   
        </div>
    );
}

function ProfileBookmarkSection(){
    return(
        <div className="bookmarks">
            <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                <p style={{display: 'inline-block', marginLeft:'10px', marginTop:'10px', fontWeight:'500',fontSize:'20px'}}>
                    About Sid's Experience
                </p>
                <button className="edit-button" style={{marginTop: '5px'}}>
                    Edit
                </button>
            </div>
            <div style={{marginLeft: '10px', marginTop:'20px'}}>
                Write Your Experience Here 
            </div>
        </div>
    );
}

function ProfessionalsSection(){
    return(
        <div className="professional">
            <p style={{textAlign: 'center', fontSize: '30px', marginTop: "15px", fontWeight:'500'}}>Professional Details</p>
            <div className="professional_details"  >
                <div>
                    <p className="profile_data_rows">JEE Roll No.</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="profile-data-values">23028400</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Currently Studying at/Graduated from</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="profile-data-values">IIT Kanpur</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Rate Your College</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="profile-data-values">4 stars</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Your Branch</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="profile-data-values">CSE</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="professional_details">
                <div>
                    <p className="profile_data_rows">Address</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="profile-data-values">Pune</p>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
        </div>
    );
}

function ReportSection(){
    return(
        <div className="reports">
            <p style={{textAlign: 'center', fontSize: '30px', marginTop: "15px" ,fontWeight:'500'}}>Reports</p>
            <div className="report_rows">
                <div>
                    <img src={report} className="report_photo" alt="Report Photo"/>
                </div>
                <div >
                    <div>
                        <p className="report_files_names">JEE-Mains Report</p>
                    </div>
                    <div>
                        <p className="report_files_verified">Verified</p>
                    </div>
                </div>
            </div>
            <div className="report_rows">
                <div>
                    <img src={report} className="report_photo" alt="Report Photo"/>
                </div>
                <div >
                    <div>
                        <p className="report_files_names">JEE-Advanced Report</p>
                    </div>
                    <div>
                        <p className="report_files_verified">Verified</p>
                    </div>
                </div>
            </div>
            <div className="report_rows">
                <div>
                    <img src={report} className="report_photo" alt="Report Photo"/>
                </div>
                <div >
                    <div>
                        <p className="report_files_names">KVPY Score Card</p>
                    </div>
                    <div className="report_files_verified">
                        <p>Verified</p>
                    </div>
                </div>
                <button className="report_add_more_items">
                    Add More Items
                </button>
            </div>
        </div>
    );
}

export default Profile;
