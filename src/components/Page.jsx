import React from 'react';
import { Circle } from './Circle';
import { Footer } from './Footer';
import { Header } from './Header';
import { HeaderBG } from './HeaderBG';
import { useSelector } from 'react-redux';

export const Page = () => {
	const isActive = useSelector(state => state.themeSlice.isActive);
	return (
		<div className={`App ${isActive ? 'dark' : ''}`}>
			<Header />
			<HeaderBG />
			<Circle />
			<Footer />
		</div>
	);
};
