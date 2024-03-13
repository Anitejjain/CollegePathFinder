import React from 'react';
import { useState , useRef} from 'react';
import "./otp.css"
import { Link } from 'react-router-dom';
import LoginImage from "../Images/Abstraction.png";
import Logo from "../Images/Logo.png"

const preventRefresh = (e) => {
	e.preventDefault();
};

export default function Login() {

    const [otp, setOTP] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);
        if (value && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };


	return (
		<div className="login-main">
			<div className="login-left" alt="logo">
				<div className="login-left-top">
					<img src={Logo}/>
					<h1> College PathFinder</h1>
					<p>Empowering Futures, Guiding Paths : College PathFinder- Your Journey, Your Choice.</p>
				</div>
				<div className="login-left-bottom">
					<img className="login-image" src={LoginImage} alt="illustration" />
				</div>
			</div>
			<div className="login-right">
				<div className="login-right-heading">OTP</div>
                <div className='login-right-text'>
                    <p>We have sent you six-digit code over your email-address</p>
                    <p>Please enter Code to reset your password</p>
                </div>
                <form>
                    <div className="otp-div">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={digit}
                                ref={(el) => (inputRefs.current[index] = el)}
                                onChange={(e) => handleChange(index, e.target.value)}
                                className="otp-button"
                            />
                        ))}
                    </div>
                </form>
                <button type="submit" onClick={preventRefresh}>
                    <Link class = "otp-link" to="/login">Confirm OTP</Link>
				</button>
				<p>
					Didn't get OTP? <Link to="/signup">Resend OTP</Link>
				</p>
			</div>
		</div>
	);
}
