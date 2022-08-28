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
			{/* <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1>
        <h1>scroll testing</h1> */}
		</div>
	);
}

export default App;
