import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Navigation from './components/Navigation';
import { Login } from './pages/Login';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import './styles/general.css';
import { CartProvider } from './context/CartContext';

function App() {
	return (
		<div id='root-div'>
			<CartProvider>
				<Routes>
					<Route element={<Outlet />}>
						<Route path='/login' element={<Login />} />
					</Route>
					<Route element={<Navigation />}>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/about' element={<About />} />
						<Route path='/product' element={<Product />} />
						<Route path='/profile' element={<Profile />} />
					</Route>
				</Routes>
			</CartProvider>
		</div>
	);
}

export default App;
