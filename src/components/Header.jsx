import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button/Button';

export const Header = ({ leftHand, isActive }) => {
	return (
		<nav>
			<ul className='header-container'>
				<Link to='/about'>Мои скиллы</Link>
				<Link to='/'>Главная</Link>
				<Button leftHand={leftHand} isActive={isActive} />
			</ul>
		</nav>
	);
};
