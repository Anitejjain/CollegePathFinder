import home_image from "../Images/main_img.png";
import "./Home.css";
import Cards from "../Cards/Cards";

const Home = () => {
    return(
        <div className="home">
            <div className="up">
                <div className="h-left">
                    <span>College</span>
                    <span>Path</span>
                    <span>Finder</span>
                    <span>:Connect To Success</span>
                </div>
                <div className="h-right">
                    <div className="h-icon">
                        <img src={home_image} className="home_img" alt="" style={{width: "36rem"}} />
                    </div>
                </div>
            </div>

            <div className="down">
                <h2 className="heading">Latest Notification</h2>
                <div class="news">
                    <Cards
                        heading={"JEE Main 2024 Session 2 Regestration Extended"}
                        details={"JEE Main 2024 session 2 registration has been extended. JEE Main 2024 session 2 registration last date and time is March 4, 2024 (upto 10:50 PM)"}
                    />
                    <Cards 
                        heading={"CUET PG 2024 City Intimation Slip Soon @pgcuet.ac.in"}
                        details={"CUET PG 2024 exam city slip will be released on March 4, 2024, while the CUET PG ​Admit Card 2024 release date is March 7, 2024."}
                    />
                    <Cards
                        heading={"IGNOU june TEE 2024 Exam form Released"}
                        details={"IGNOU Exam Form 2024 for June Term End Examination has been released on March 1, 2024. Students can fill out the IGNOU exam form online on the official website of IGNOU @exam.ignou.ac.in."} 
                    />
                    <Cards
                        heading={"IGNOU june TEE 2024 Exam form Released"}
                        details={"IGNOU Exam Form 2024 for June Term End Examination has been released on March 1, 2024. Students can fill out the IGNOU exam form online on the official website of IGNOU @exam.ignou.ac.in."} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;