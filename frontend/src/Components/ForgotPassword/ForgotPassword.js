import React from 'react';
import "./ForgotPassword.css"
import { Link } from 'react-router-dom';
import LoginImage from "../Images/Abstraction.png";
import Logo from "../Images/Logo.png"

const preventRefresh = (e) => {
	e.preventDefault();
};

export default function Login() {
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
				<div className="login-right-heading">Forgot Password</div>
                <div className='login-right-text'>
                    <p>Trouble Logging in?</p>
                    <p>Enter your Registered Email address to get OTP and reset your password</p>
                </div>
				<form>
					<div>
						<label htmlFor="e-mail">E-Mail Address</label>
						<input type="email" id="e-mail" placeholder="Enter you mail" />
					</div>
					<button type="submit" onClick={preventRefresh}>
                        <Link class = "otp-link" to="/otp">Get OTP</Link>
					</button>
				</form>
				<p>
					Back to <Link to="/signup">Login</Link>
				</p>
			</div>
		</div>
	);
}
