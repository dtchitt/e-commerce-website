import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Product from './pages/Product';
import Navigation from './components/Navigation';
import { Login } from './pages/Login';
import Profile from './pages/Profile';
import Cart from './pages/Cart';

import SellerNavigation from './pages/seller/SellerNavigation';
import Dashboard from './pages/seller/Dashboard';
import Seller_Products from './pages/seller/Products';
import Analytics from './pages/seller/Analytics';
import './styles/general.css';

function App() {
	return (
		<div id='root-div'>
			<Routes>
				<Route element={<Outlet />}>
					<Route path='/login' element={<Login />} />
				</Route>
				<Route path='/' element={<Navigation />}>
					<Route path='/' element={<Navigate to='home' />} />
					<Route path='home' element={<Home />} />
					<Route path='cart' element={<Cart />} />
					<Route path='about' element={<About />} />
					<Route path='products' element={<Products />} />
					<Route path='product' element={<Product />} />
					<Route path='profile' element={<Profile />} />
				</Route>
				<Route path='seller' element={<SellerNavigation />}>
					<Route path='' element={<Navigate to='dashboard' />} />
					<Route path='dashboard' element={<Dashboard />} />
					<Route path='products' element={<Seller_Products />} />
					<Route path='analytics' element={<Analytics />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
