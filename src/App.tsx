import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import HomeLayout from "./layouts/HomeLayout";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomeLayout />}>
					<Route path="" element={<HomePage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
