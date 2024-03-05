import "./CollegePredictor.css";


function CollegePredictor(){
    return (   
        <>
        <div className="whiteback">
         <div className="centerplace"><Input_data_section/></div>   
        <div className="CollegePredictor">
            <LeftSection/>
            <OptionsSection/>
            <RightSection/>
            
        </div></div>
        </>
    );
}

function Input_data_section(){
    return (
        <div className="input_section">
            <div>
            <div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Enter Category</label>
</div>
<div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Enter Your AIR</label>
</div>
            
            </div>
            
            <div>
            <div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Enter Your Preffered College</label>
</div>
<div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Enter Your Preffered Branch</label>
</div>
            </div>
        </div>
    );
}

function LeftSection(){
    return (
        
        <div className="selection_space">
   <p>Select Colleges</p>
<label class="container">One
  <input type="checkbox" checked="checked"/>
  <span class="checkmark"></span>
</label>

<label class="container">Two
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>

<label class="container">Three
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>

<label class="container">Four
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
        </div>
    );
}


function RightSection(){
    return (
        
        <div className="selection_space">
   <p>Select Branches</p>
<label class="container">One
  <input type="checkbox" checked="checked"/>
  <span class="checkmark"></span>
</label>

<label class="container">Two
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>

<label class="container">Three
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>

<label class="container">Four
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
        </div>
    );
}
function OptionsSection(){
    return (
        <div className="available">
            <p style={{textAlign: 'center', fontSize: '30px', marginTop: "15px"}}>Available Options</p>
            <div className="available_details"  >
                <div>
                    <p className="available_data_rows">IITK</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="available_data_values">Computer Science and Engineering</p>
                    <button className="edit-button">View</button>
                </div>
            </div>
            <div className="available_details"  >
                <div>
                    <p className="available_data_rows">IITB</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="available_data_values">Computer Science and Engineering</p>
                    <button className="edit-button">View</button>
                </div>
            </div>
            <div className="available_details"  >
                <div>
                    <p className="available_data_rows">IITD</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="available_data_values">Computer Science and Engineering</p>
                    <button className="edit-button">View</button>
                </div>
            </div>
            <div className="available_details"  >
                <div>
                    <p className="available_data_rows">IITKGP</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="available_data_values">Computer Science and Engineering</p>
                    <button className="edit-button">View</button>
                </div>
            </div>
            <div className="available_details"  >
                <div>
                    <p className="available_data_rows">IITG</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr auto'}}>
                    <p className="available_data_values">Computer Science and Engineering</p>
                    <button className="edit-button">View</button>
                </div>
            </div>
        </div>
    );
}

export default CollegePredictor;
