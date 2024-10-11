import { Link } from "react-router-dom";

function Register() {
	return (
		<div className="max-w-md mx-auto mt-10 bg-white p-8 boder border-gray-300 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
				Register
			</h2>
			<form className="flex flex-col gap-5">
				<input
					type="text"
					placeholder="Username"
					className="w-full px-3 py-2 border  border-gray-300 rounded-md focus:outline-none"
				/>
				<input
					type="email"
					placeholder="Email"
					className="w-full px-3 py-2 border  border-gray-300 rounded-md focus:outline-none"
				/>
				<input
					type="password"
					placeholder="Password"
					className="w-full px-3 py-2 border  border-gray-300 rounded-md focus:outline-none"
				/>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400"
				>
					Register
				</button>
			</form>
			<Link
				to="/login"
				className="text-blue-700 hover:underline mt-4 block text-center"
			>
				Login
			</Link>
		</div>
	);
}

export default Register;
