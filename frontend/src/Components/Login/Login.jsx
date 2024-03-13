import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoginImage from "../Images/Abstraction.png";
import Logo from "../Images/Logo.png"
import "./Login.css";

function Login() {

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [userType, setUserType] = useState();
	const navigate = useNavigate();

	axios.defaults.withCredentials = true;
	const handleSubmit = (e) => {
		e.preventDefault()
		if (!email || !password || !userType) {
			alert("All fields are required.");
			return;
		}
		axios.post('http://localhost:3001/login', { email, password ,userType})
			.then(result => {
				console.log(result);
				if (result.data === "Login Successful") {
					navigate('/home', { state: { userID, email } });
					navigate('/home');
				}
				else if (result.data === "Incorrect password") {
					alert("Invalid password")
				}
				else if (result.data === "User not found") {
					alert("User not found")
				}
			})
			.catch(err => console.log(err))
	}

	return (
		<div className="login-main">
			<div className="login-left" alt="logo">
				<div className="login-left-top">
					<img src={Logo} />
					<h1> College PathFinder</h1>
					<p>Empowering Futures, Guiding Paths : College PathFinder- Your Journey, Your Choice.</p>
				</div>
				<div className="login-left-bottom">
					<img className="login-image" src={LoginImage} alt="illustration" />
				</div>
			</div>
			<div className="login-right">
				<div className="login-right-heading">Login</div>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="userType">
							<strong>User Type</strong>
						</label>
						<select
							name="userType"
							className="form-control rounded-0"
							onChange={(e) => setUserType(e.target.value)}
						>
							<option value="">Select User Type</option>
							<option value="college-going">College Going</option>
							<option value="college-searching">College Searching</option>
						</select>
					</div>
					<div className="mb-3">
						<label htmlFor="email">
							<strong>Email</strong>
						</label>
						<input
							type="email"
							placeholder="Enter Email"
							autoComplete="off"
							name="email"
							className="form-control rounded-0"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="email">
							<strong>Password</strong>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							name="password"
							className="form-control rounded-0"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit">
						Login
					</button>
				</form>
				<p><strong>Don't have an Account ?</strong></p>
				<Link to='/register'>Sign up</Link>
			</div>
		</div>
	);
}

export default Login;