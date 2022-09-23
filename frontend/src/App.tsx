import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import './App.css';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route element={<Outlet />}>
					<Route path='/login' element={<Login />} />
				</Route>
				<Route element={<Navigation />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/product" element={<Product />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
