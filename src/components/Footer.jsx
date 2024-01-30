import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaMailBulk, FaTelegram } from 'react-icons/fa';

export const Footer = () => {
	const [telegram, setTelegram] = useState(false);
	const [instagram, SetInstagram] = useState(false);
	const [mailBulk, setMailBulk] = useState(false);
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<FaTelegram
					className='footer-icons'
					onClick={() => setTelegram(!telegram)}
				/>
				{telegram && (
					<motion.a
						href='https://t.me/houldC'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
					>
						Перейти в Телеграмм
					</motion.a>
				)}
				<FaInstagram
					className='footer-icons'
					onClick={() => SetInstagram(!instagram)}
				/>
				{instagram && (
					<motion.a
						href='https://t.me/houldC'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
					>
						Перейти в Инстаграмм
					</motion.a>
				)}
				<FaMailBulk
					className='footer-icons'
					onClick={() => setMailBulk(!mailBulk)}
				/>
				{mailBulk && (
					<motion.a
						href='mailto: chubatovvv@bk.ru'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
					>
						chubatovvv@bk.ru
					</motion.a>
				)}
			</div>
		</footer>
	);
};
