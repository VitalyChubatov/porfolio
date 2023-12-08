import React from 'react'
import { motion } from 'framer-motion'

export const HeaderBG = () => {
     const cartAnimation = {
				hidden: {
					opacity: 0,
				},
				visible: {
					opacity: 1,
					transition: { duration: 2 },
				},
			}
  return (
		<section className='logo-container'>
			<motion.p
				className='logo'
				variants={cartAnimation}
				initial='hidden'
				animate='visible'
			>
				Привет! Меня зовут Виталий,и я являюсь веб-разработчиком с опытом работы
				в создании красивых и функциональных веб-сайтов. Моя цель - создавать
				уникальные и эффективные веб-проекты, которые соответствуют потребностям
				и ожиданиям моих клиентов. В моем портфолио вы найдете разнообразные
				проекты, начиная от простых лендингов и персональных блогов, до сложных
				веб-приложений и интернет-магазинов. Я стремлюсь к постоянному
				совершенствованию своих навыков и использую самые современные
				технологии, чтобы обеспечить высокое качество и производительность
				веб-сайтов.
			</motion.p>
			<motion.div
				className='photo'
				variants={cartAnimation}
				initial='hidden'
				animate='visible'
			></motion.div>
		</section>
	)
}
