import NavMenu from "./components/NavMenu";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavMenu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
