import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './Button/Button';

export const Header = () => {
	return (
		<nav>
			<ul className='header-container'>
				<NavLink
					className={({ isActive }) => (isActive ? 'active' : 'no-active')}
					to='/'
				>
					Главная
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? 'active' : 'no-active')}
					to='/about'
				>
					Мои скиллы
				</NavLink>
				<Button />
			</ul>
		</nav>
	);
};
