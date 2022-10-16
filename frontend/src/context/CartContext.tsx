import { createContext, ReactNode, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type CartProviderProps = {
	children: ReactNode;
};

type CartItem = {
	id: number;
	count: number;
};

type CartContext = {
	getItemCount: (id: number) => number;
	increaseCartCount: (id: number) => void;
	decreaseCartCount: (id: number) => void;
	removeFromCart: (id: number) => void;
	cartSize: number;
	cartItems: CartItem[];
};

const CartContext = createContext({} as CartContext);

export const useCart = () => {
	return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);

	const cartSize = cartItems.reduce((count, item) => item.count + count, 0);

	const getItemCount = (id: number) => cartItems.find((item) => item.id === id)?.count || 0;

	const increaseCartCount = (id: number) => {
		setCartItems((items) => {
			if (items.find((item) => item.id === id) == null) {
				return [...items, { id, count: 1 }];
			}

			return items.map((item) => {
				if (item.id === id) {
					return { ...item, count: item.count++ };
				} else {
					return item;
				}
			});
		});
	};

	const decreaseCartCount = (id: number) => {
		setCartItems((items) => {
			if (items.find((item) => item.id === id)?.count === 1) {
				return items.filter((item) => item.id !== id);
			}

			return items.map((item) => {
				if (item.id === id) {
					return { ...item, count: item.count-- };
				} else {
					return item;
				}
			});
		});
	};

	const removeFromCart = (id: number) => {
		setCartItems((currItems) => currItems.filter((item) => item.id !== id));
	};

	return (
		<CartContext.Provider
			value={{
				getItemCount,
				increaseCartCount,
				decreaseCartCount,
				removeFromCart,
				cartSize,
				cartItems,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
