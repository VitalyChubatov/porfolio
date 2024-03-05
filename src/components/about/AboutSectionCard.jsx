import { motion } from 'framer-motion';
import React from 'react';

export const AboutSectionCard = ({
	title,
	heading,
	img,
	href,
	open,
	id,
	tooglePopup,
}) => {
	const cartAnimation = {
		hidden: {
			y: 200,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: [0, 0, 1, 1, 1],
			transition: { delay: custom * 2 },
		}),
	};

	return (
		<motion.div
			onClick={() => tooglePopup(id)}
			style={{ marginTop: 30 }}
			className='card'
			variants={cartAnimation}
			viewport={{ amount: 0.2, once: true }}
			initial='hidden'
			whileInView='visible'
		>
			<h3>{heading}</h3>
			<img
				src={img}
				alt='courses'
				width={250}
				height={200}
				style={{ margin: '25px' }}
			/>
			<p>{title}</p>
		</motion.div>
	);
};
