import "./CollegePredictor.css";
import {useState} from "react";
import { BsBorderStyle } from "react-icons/bs";
import colleges from './colleges.json';

function CollegePredictor(){
    const [showOptions, setShowOptions] = useState(false);
    const [selectedInputs, setSelectedInputs] = useState({
        category: "",
        AIR: undefined,
        preferredCollege: "",
        preferredBranch: "",
        examination: "",
        gender: ""
    });

    return (   
        <>
        <div className="whiteback">
            <div className="header-text">
                <h1>College Predictor</h1>
            </div>
            <div className="centerplace">
                <Input_data_section colleges={colleges} setShowOptions={setShowOptions} setSelectedInputs={setSelectedInputs} selectedInputs={selectedInputs}/>
            </div>
            <div className="submit-button">
                <button className="submit-button-text" onClick={() => setShowOptions(true)}>Submit</button>
            </div>
            <div className="CollegePredictor">
                {showOptions ? <OptionsSection colleges={colleges} selectedInputs={selectedInputs}/> : <Alternate/>}
            </div>
        </div>
        </>
    );
}


function Input_data_section({colleges , setShowOptions,setSelectedInputs,selectedInputs}){

    const [category,setCategory]=useState("");
    const [AIR,setAIR]=useState(undefined);
    const [preferredCollege, setPreferredCollege] = useState("");
    const [preferredBranch, setPreferredBranch] = useState("");    
    const [examination,setExamination]=useState("");
    const [gender,setGender]=useState("");

    const uniqueCollegeNames = new Set();
    colleges.forEach(college => {
        uniqueCollegeNames.add(college["College"]);
    });


    const uniqueCollegeNamesArray = Array.from(uniqueCollegeNames);

    const uniqueBranchNames = new Set();
    colleges.forEach(college => {
        uniqueBranchNames.add(college["Academic Program Name"]);
    });
    const uniqueBranchNamesArray = Array.from(uniqueBranchNames);

    const handleInputChange = (name, value) => {
        setSelectedInputs({
            ...selectedInputs,
            [name]: value
          });
    };

    return (
        <>
        <form className="input-section">
            <div className="form__group">
                <select className="form__field" onChange={(e) => handleInputChange("examination", e.target.value)}>
                    <option value="">Choose Examination:</option>
                    <option value="JEE Advanced">JEE Advanced</option>
                </select>
            </div>
            <div className="form__group">
                <select className="form__field" onChange={(e) => handleInputChange("category", e.target.value)}>
                    <option value="">Choose Category:</option>
                    <option value="OPEN">OPEN</option>
                    <option value="OPEN (PwD)">OPEN (PwD)</option>
                    <option value="EWS">EWS</option>
                    <option value="EWS">EWS (PwD)</option>
                    <option value="OBC-NCL">OBC-NCL (PwD)</option>
                    <option value="SC">SC</option>
                    <option value="SC (PwD)">SC (PwD)</option>
                    <option value="ST">ST</option>
                    <option value="ST (PwD)">ST (PwD)</option>
                </select>
            </div>
            <div className="form__group">
                <input 
                    type="number" 
                    className="form__field" 
                    placeholder="Enter Category AIR" 
                    value={selectedInputs.AIR}
                    onChange= {(e)=> handleInputChange("AIR", e.target.value)}
                />
            </div>
            <div className="form__group">
                <select className="form__field" onChange={(e) => handleInputChange("gender", e.target.value)}>
                    <option value="">Choose Gender:</option>
                    <option value="Gender-Neutral">Gender-Neutral</option>
                    <option value="Female-only (including Supernumerary)">Female-only (including Supernumerary)</option>
                </select>
            </div>
            <div className="form__group">
                 <select className="form__field" value={selectedInputs.preferredCollege} onChange={(e) => handleInputChange("preferredCollege", e.target.value)}>
                    <option value="">Choose Preferred College:</option>
                    {uniqueCollegeNamesArray.map((collegeName, index) => (
                        <option key={index} value={collegeName}>{collegeName}</option>
                    ))}
                </select>
            </div>
            <div className="form__group">
                <select className="form__field" value={selectedInputs.preferredBranch} onChange={(e) => handleInputChange("preferredBranch", e.target.value)}>
                    <option value="">Choose Preferred Branch:</option>
                    {uniqueBranchNamesArray.map((branchName, index) => (
                        <option key={index} value={branchName}>{branchName}</option>
                    ))}
                </select>
            </div>
        </form>
        
        </>
    );
}

function OptionsSection({colleges, selectedInputs}){

    const filteredColleges = colleges.filter(college => {
        return (
            (selectedInputs.preferredCollege === "" || college["College"] === selectedInputs.preferredCollege) &&
            (selectedInputs.preferredBranch === "" || college["Academic Program Name"] === selectedInputs.preferredBranch) &&
            (selectedInputs.AIR === "" || (college["Closing Rank"] >= selectedInputs.AIR)) &&
            (selectedInputs.category === "" || college["Seat Type"] === selectedInputs.category) &&
            // (selectedInputs.examination === "" || college.examination === selectedInputs.examination) &&
            (selectedInputs.gender === "" || college["Gender"] === selectedInputs.gender)
        );
    });

    return (
        <div className="available">
            <p style={{ textAlign: 'center', fontSize: '30px', marginTop: "15px" }}>Available Options</p>
            <CollegeList colleges={filteredColleges} />
        </div>
    );
}

function CollegeList({ colleges }) {

    if (colleges.length === 0) {
        return (
            <p>
                There are {colleges.length} options Possible Based on Your Search
            </p>
        );
    } else {
        const sortedColleges = [...colleges].sort((a, b) => a["Closing Rank"] - b["Closing Rank"]);
    
        return (
            <section>
                <ul className="available">
                    {sortedColleges.map((college) => (
                        <College key={college["Opening Rank"]} college={college} />
                    ))}
                </ul>
                <p>
                    There are {sortedColleges.length} options Possible Based on Your Search
                </p>
            </section>
        );
    }
}

function College( { college }){
    return (
      <li  className="available">
        <div className="available_details">
            <div>
            <p className="available_data_rows">{college["College"]}</p>
            </div>
            <div>
            <p className="available_data_values">Seat Type: {college["Seat Type"]}</p>
            </div>
            <div>
            <p className="available_data_values">Gender : {college["Gender"]}</p>
            </div>
            <div>
            <p className="available_data_values">Category Closing Rank : {college["Closing Rank"]}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto' }}>
            <p className="available_data_values">{college["Academic Program Name"]}</p>
            <button className="edit-button">View</button>
            </div>
        </div>
      </li>
    );
}

function Alternate(){
    return(
        <div style={{ borderStyle: "none", display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "bold", marginTop:"8px" }}>
            Please add all the Informations to See Predicted Colleges
        </div>
    );
}

export default CollegePredictor;