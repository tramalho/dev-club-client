import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Register from "./pages/register";
import Login from "./pages/login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
