import React, { useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { motion } from 'framer-motion';
import './about.css';
import { FaGithub } from 'react-icons/fa';
import { AboutSection } from './AboutSection';

export const About = ({ leftHand, isActive }) => {
	const [html, setHtml] = useState(false);
	const [css, setCss] = useState(false);
	const [js, setJs] = useState(false);
	const [react, setReact] = useState(false);
	const [git, setGit] = useState(false);

	const cartAnimation = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: { duration: 2 },
		},
	};
	return (
		<div className={`App ${isActive ? 'dark' : ''}`}>
			<Header leftHand={leftHand} isActive={isActive} />
			<article className='about-section-container'>
				<section className='about-container '>
					<motion.p className='about-title' initial='hidden' animate='visible'>
						ВОЙТИ В АЙТИ
					</motion.p>
					<motion.div
						className='photo-about-cicrle'
						initial='hidden'
						animate={{ rotate: -360 }}
						transition={{ duration: 200 }}
					>
						<motion.div
							className='photo-about'
							initial='hidden'
							animate='visible'
							variants={cartAnimation}
						></motion.div>
					</motion.div>
				</section>
				<h2 className='skills'>SKILLS BUTTON</h2>
				<aside className='about-me'>
					<div className='about-cart'>
						<div className='about-circle' onClick={() => setHtml(!html)}>
							HTML
						</div>
						{html && (
							<motion.div
								className='about-open-title'
								initial='hidden'
								animate='visible'
								variants={cartAnimation}
							>
								<h1>Знание HTML:</h1>
								<br /> 1. Понимание синтаксиса HTML, тегов и атрибутов
								<br />
								2. Умение создавать структурированные и семантически корректные
								веб-страницы
							</motion.div>
						)}
					</div>
					<div className='about-cart'>
						<div className='about-circle' onClick={() => setCss(!css)}>
							CSS
						</div>
						{css && (
							<motion.div
								className='about-open-title'
								initial='hidden'
								animate='visible'
								variants={cartAnimation}
							>
								<h1>Знание CSS :</h1>
								<br /> 1. Знание предпроцессора sass (но редко его использую)
								<br /> 2 . Flexbox , Grid , Адаптивная верстка , Keyframes и т.д
							</motion.div>
						)}
					</div>
					<div className='about-cart'>
						<div className='about-circle' onClick={() => setJs(!js)}>
							JS
						</div>
						{js && (
							<motion.div
								className='about-open-title'
								initial='hidden'
								animate='visible'
								variants={cartAnimation}
							>
								<h1>Знание JS :</h1>
								<br /> 1. типы Данных , операторы логические операторы функции{' '}
								<br />
								<br /> 2. Циклы <br /> методы Массивов <br /> методы Обьектов,
								Prototype, Promise, EVENT LOOP, Дескрипторы Таймеры, Запросы на
								Сервер , Отлов ошибок <br />
								<br /> 3 . Понимание ООП, REST API Базовые знания TYPESCRIPT
							</motion.div>
						)}
					</div>
					<div className='about-cart'>
						<div className='about-circle' onClick={() => setGit(!git)}>
							REACT
						</div>
						{git && (
							<motion.div
								className='about-open-title'
								initial='hidden'
								animate='visible'
								variants={cartAnimation}
							>
								<h1>Знание React:</h1>
								<br /> 1. Жизненый цикл компонента , Props , Роутинг, Состояние,
								Хуки
								<br />
								<br /> 2. React Hook Form <br /> GIT <br /> Redux(на базовом
								уровне) <br /> FramerMotion <br />
								(для анимации)
							</motion.div>
						)}
					</div>
					<div className='about-cart'>
						<div className='about-circle' onClick={() => setReact(!react)}>
							<FaGithub />
						</div>
						{react && (
							<motion.div
								className='about-open-title'
								initial='hidden'
								animate='visible'
								variants={cartAnimation}
							>
								<h1>Знание GIT :</h1>
								<br /> 1. Деплой сервера с GITHUB,опыт работы с GITLAB, коммиты,
								ветки , пуши и т.д
								<br />
								<br /> 2. Умение обшаться с консоль <br />
							</motion.div>
						)}
					</div>
				</aside>
			</article>
			<AboutSection />

			<Footer />
		</div>
	);
};
