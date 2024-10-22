import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Register from "./pages/register";
import Login from "./pages/login";
import List from "./pages/list";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/list" element={<List />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
