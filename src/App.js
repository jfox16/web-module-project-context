import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Contexts
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';



function App() {

	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		if (!cart.some(i => i.id === item.id)) {
			setCart([ ...cart, item ]);
		}
	};

	const removeItem = item => {
		const index = cart.indexOf(item);
		if (index !== -1) {
			const newCart = [ ...cart ]
			newCart.splice(index, 1);
			setCart(newCart);
		}
	}

	return (
		<div className="App">
			<CartContext.Provider value={{ products, cart, addItem, removeItem }} >
				<Navigation />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
