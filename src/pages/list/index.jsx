import api from "../../services/api";
import { useEffect } from "react";

function List() {
	useEffect(() => {
		async function fetchData() {
			const token = localStorage.getItem("token");
			const data = await api.get("/users", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(data.data);
		}

		fetchData();
	}, []);

	return (
		<div>
			<h2>List</h2>
		</div>
	);
}

export default List;
