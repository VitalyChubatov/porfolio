import React from 'react';
import { AboutSectionCard } from './AboutSectionCard';

import img2 from './images/JavaScript-logo.png';
import img3 from './images/Без названия.png';
import img4 from './images/logo-with-shadow.png';
import img5 from './images/github-logo-5F384D0265-seeklogo.com.png';

export const AboutSection = () => {
	const card = [
		{
			id: 223,
			heading: 'Bodgan Stashyk',
			title: 'JS + 	REACT + REDUX',
			img: img2,
			href: 'https://www.udemy.com/course/react-ru/learn/lecture/35871506?components=add_to_cart%2Cavailable_coupons%2Cbase_purchase_section%2Cbuy_button%2Cbuy_for_team%2Ccacheable_buy_button%2Ccacheable_deal_badge%2Ccacheable_discount_expiration%2Ccacheable_price_text%2Ccacheable_purchase_text%2Ccurated_for_ufb_notice_context%2Ccurriculum_context%2Cdeal_badge%2Cdiscount_expiration%2Cgift_this_course%2Cincentives%2Cinstructor_links%2Clifetime_access_context%2Cmoney_back_guarantee%2Cprice_text%2Cpurchase_tabs_context%2Cpurchase%2Crecommendation%2Credeem_coupon%2Csidebar_container%2Cpurchase_body_container&couponCode=REACTRUJAN2024#announcements',
		},
		{
			id: 225,
			heading: 'Михаил Непомнящий',
			title: 'Vite Webpack',
			img: img4,
		},
		{
			id: 226,
			heading: 'Red GROUP',
			title: 'TYPESCRIPT',
			img: img3,
		},
		{
			id: 227,
			heading: 'Git',
			title: 'Git',
			img: img5,
		},
	];

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-around',
				flexWrap: 'wrap',
			}}
		>
			{card.map(item => (
				<AboutSectionCard key={item.id} {...item} />
			))}
		</div>
	);
};
