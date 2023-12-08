import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
		<nav>
			<ul className='header-container'>
				<Link to='/about'>Обо мне</Link>
				<Link to='/'>Мои работы</Link>
				
			</ul>
		</nav>
	)
}
