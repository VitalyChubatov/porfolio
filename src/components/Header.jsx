import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
		<nav>
			<ul className='header-container'>
				<Link to='/about'>Мои скиллы</Link>
				<Link to='/'>Главная</Link>
				
			</ul>
		</nav>
	)
}
