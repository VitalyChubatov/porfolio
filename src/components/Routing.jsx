import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './Footer';
import { About } from './about/About';
import { Page } from './Page';

export const Routing = () => {
	const [isActive, setIsActive] = useState(false);

	const leftHandHandler = () => {
		setIsActive(!isActive);
		console.log(isActive);
	};

	return (
		<Routes>
			<Route
				path='/'
				element={<Page leftHand={leftHandHandler} isActive={isActive} />}
			/>
			<Route
				path='/about'
				element={<About leftHand={leftHandHandler} isActive={isActive} />}
			/>
			<Route path='/work' element={<Footer />} />
		</Routes>
	);
};
