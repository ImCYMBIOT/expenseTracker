import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				navigate("/main");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				alert(`${errorMessage}`);
			});
	};

	return (
		<div className="login__main__container">
			<div className="login__card">
				<div className="login__flex__container">
					<h1 className="login__heading">Log In</h1>
					<form onSubmit={handleSubmit} className="login__form">
						<input
							type="email"
							className="login__form__email"
							placeholder="Email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							className="login__form__password"
							placeholder="Password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button
							type="submit"
							onClick={handleSubmit}
							className="login__button">
							Login
						</button>
					</form>
					<p className="login__text">
						Need to Signup?{" "}
						<Link to="/signup" className="login__signup__link">
							Create Account
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
