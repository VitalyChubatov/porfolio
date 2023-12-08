import React from 'react'
import { motion } from 'framer-motion'
import { FaTelegram } from 'react-icons/fa'
import { Tictac } from './крестикиНолики/Tictac'



export const Circle = () => {

    let  titleForAlert = 'Простите,из за того что файлы задеплоины я не могу понять куда вы меня ведете.Поэтому вам надо зайти в репозиторий и нажать на ссылку деплоя вручную(она находиться во вкладке About):('

    	 const obj = [
					{
						key: 1,
						href: 'https://github.com/VitalyChubatov/shop-and-portfolio',
						title: 'Сайт магазина мебели',
						text: 'Уникальная коллекция мебели ждет вас на нашем сайте! Создайте уютную обстановку в своем доме вместе с нами. Предлагаем качественную и стильную мебель по выгодным',
						alert: titleForAlert,
					},
					{
						key: 2,
						href: 'https://github.com/VitalyChubatov/todo',
						title: 'Ваши задачи',
						text: 'Устали терять важную информацию? Сделайте свою жизнь легче с Онлайн заметками! Записывайте идеи, задачи и важные события в удобной форме',
						alert: titleForAlert,
					},
					{
						key: 4,
						title: 'Крестики Нолики',
						text: <Tictac />,
					},
					{
						key: 3,
						href: 'https://t.me/houldC',
						title: 'telegram',
						text: <FaTelegram className='telegram-size' />,
					},
				]

    const textAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2},
        })
    }

    const cartAnimation = {
			hidden: {
				y: 100,
                opacity: 0,
			},
			visible: custom => ({
                y: 0,
                borderRadius: ['20%', '50%', '50%', '50%', '30%'],
				opacity: [0, 0, 1, 1, 1],
				transition: { delay: custom * 1 },
			}),
		}
  return (
		<aside className='circle-box'>
			{obj.map(item => (
				<motion.div
                    key={item.key}
					className='circle-container'
					viewport={{ amount: 0.2, once: true }}
				>
					<motion.h3
						className='circle-title'
						variants={textAnimation}
						viewport={{ amount: 0.2, once: true }}
						initial='hidden'
						whileInView='visible'
						transition={{
							duration: 1,
						}}
					>
						{item.title}
					</motion.h3>
					<motion.a
						variants={cartAnimation}
						viewport={{ amount: 0.2, once: true }}
						initial='hidden'
						whileInView='visible'
						href={item.href}
						key={item.key}
						onClick={() => {
							if (item.key === 1 || item.key === 2 || item.key === 3) {
								alert(item.alert ? titleForAlert : 'Уже загружаю')
							}
						}}
						className='circle'
					>
						{item.text}
					</motion.a>
				</motion.div>
			))}
		</aside>
	)
}
