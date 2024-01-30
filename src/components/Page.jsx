import React from 'react';
import { Circle } from './Circle';
import { Footer } from './Footer';
import { Header } from './Header';
import { HeaderBG } from './HeaderBG';

export const Page = ({ leftHand, isActive }) => {
	return (
		<div className={`App ${isActive ? 'dark' : ''}`}>
			<Header leftHand={leftHand} isActive={isActive} />
			<HeaderBG />
			<Circle />
			<Footer />
		</div>
	);
};
