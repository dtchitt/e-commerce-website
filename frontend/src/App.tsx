import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Product from "./components/pages/Product";
import Profile from "./components/pages/Profile";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/pages/Login";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route element={<Outlet />}>
					<Route path="/login" element={<Login />} />
				</Route>
				<Route element={<Navigation />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/product" element={<Product />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
