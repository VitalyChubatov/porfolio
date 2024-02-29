import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './Footer';
import { About } from './about/About';
import { Page } from './Page';

export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Page />} />
			<Route path='/about' element={<About />} />
			<Route path='/work' element={<Footer />} />
		</Routes>
	);
};
