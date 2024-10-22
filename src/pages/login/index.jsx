import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";

function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		console.log(emailRef.current.value);
		console.log(passwordRef.current.value);

		try {
			const { data } = await api.post("/login", {
				email: emailRef.current.value,
				password: passwordRef.current.value,
				age: "1",
			});
			localStorage.setItem("token", data);
			navigate("/list");
		} catch {
			alert("Invalid email or password");
		}
	}

	return (
		<div className="max-w-md mx-auto mt-10 bg-white p-8 boder border-gray-300 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
				Login
			</h2>
			<form className="flex flex-col gap-5" onSubmit={handleSubmit}>
				<input
					ref={emailRef}
					type="email"
					placeholder="Email"
					className="w-full px-3 py-2 border  border-gray-300 rounded-md focus:outline-none"
				/>
				<input
					ref={passwordRef}
					type="password"
					placeholder="Password"
					className="w-full px-3 py-2 border  border-gray-300 rounded-md focus:outline-none"
				/>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400"
				>
					Login
				</button>
			</form>
			<Link
				to="/"
				className="text-blue-700 hover:underline mt-4 block text-center"
			>
				Register
			</Link>
		</div>
	);
}

export default Login;
