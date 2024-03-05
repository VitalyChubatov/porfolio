import React, { useState } from 'react';
import { AboutSectionCard } from './AboutSectionCard';
import { FaTelegram } from 'react-icons/fa';
import { SlClose } from 'react-icons/sl';

import img2 from './images/JavaScript-logo.png';
import img3 from './images/Без названия.png';
import img4 from './images/logo-with-shadow.png';
import img5 from './images/github-logo-5F384D0265-seeklogo.com.png';
import imgReact from './images/8057863.png';
import imgRedux from './images/redux.png';

export const AboutSection = () => {
	const [openModal, setOpenModal] = useState(false);
	const [openModalWebPack, setOpenModalWebPack] = useState(false);
	const [openModalTypescript, setOpenModalTypescript] = useState(false);
	const [openModalGit, setOpenModalGit] = useState(false);

	const tooglePopup = id => {
		id === 223 ? setOpenModal(!openModal) : setOpenModal(false);

		id === 225
			? setOpenModalWebPack(!openModalWebPack)
			: setOpenModalWebPack(false);

		id === 226
			? setOpenModalTypescript(!openModalTypescript)
			: setOpenModalTypescript(false);

		id === 227 ? setOpenModalGit(!openModalGit) : setOpenModalGit(false);
	};

	const card = [
		{
			id: 223,
			heading: 'Bodgan Stashyk',
			title: 'JS + REACT + REDUX',
			img: img2,
			popup: openModal,
			href: 'https://www.udemy.com/course/react-ru/learn/lecture/35871506?components=add_to_cart%2Cavailable_coupons%2Cbase_purchase_section%2Cbuy_button%2Cbuy_for_team%2Ccacheable_buy_button%2Ccacheable_deal_badge%2Ccacheable_discount_expiration%2Ccacheable_price_text%2Ccacheable_purchase_text%2Ccurated_for_ufb_notice_context%2Ccurriculum_context%2Cdeal_badge%2Cdiscount_expiration%2Cgift_this_course%2Cincentives%2Cinstructor_links%2Clifetime_access_context%2Cmoney_back_guarantee%2Cprice_text%2Cpurchase_tabs_context%2Cpurchase%2Crecommendation%2Credeem_coupon%2Csidebar_container%2Cpurchase_body_container&couponCode=REACTRUJAN2024#announcements',
		},
		{
			id: 225,
			heading: 'Михаил Непомнящий',
			title: 'Vite Webpack',
			popup: openModalWebPack,

			img: img4,
		},
		{
			id: 226,
			heading: 'Red GROUP',
			title: 'TYPESCRIPT',
			popup: openModalTypescript,
			img: img3,
		},
		{
			id: 227,
			heading: 'Git',
			popup: openModalGit,
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
				<AboutSectionCard
					key={item.id}
					{...item}
					tooglePopup={tooglePopup}
					openModal={openModal}
				/>
			))}

			{openModal ||
			openModalGit ||
			openModalTypescript ||
			openModalWebPack === true ? (
				<div
					style={{
						background: 'white',
						position: 'fixed',
						overflow: 'hidden',
						top: 100,
						width: '350px',
						height: '495px',
						border: '1px solid black',
					}}
				>
					{openModalGit === true ? (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
							onClick={() => setOpenModalGit(!openModalGit)}
						>
							<span
								style={{
									display: 'flex',
									justifyContent: 'space-around',
									width: '150%',
									alignItems: 'center',
								}}
							>
								<h3 style={{ marginTop: 10 }}>GIT</h3>
								<SlClose style={{ fontSize: 20 }} />
							</span>
							<img
								src={card[3].img}
								alt='git'
								width={150}
								height={150}
								style={{ margin: 10 }}
							/>
							<span style={{ padding: 30, marginTop: 30 }}>
								<p>
									Я брал информацию везде,сейчас могу назвать себя уверенным
									пользователем Git
								</p>
							</span>
							<span
								style={{
									display: 'flex',
									background: 'black',
									width: '100%',
									marginTop: 74,
									justifyContent: 'space-between',
								}}
							>
								<a
									href='https://gitlab.com/HouldC'
									style={{ color: 'red', margin: 30 }}
								>
									GITLAB
								</a>
								<a
									href='https://github.com/VitalyChubatov'
									style={{ color: 'blue', margin: 30 }}
								>
									GITHUB
								</a>
							</span>
						</div>
					) : null}

					{openModalTypescript === true ? (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
							onClick={() => setOpenModalTypescript(!openModalTypescript)}
						>
							<span
								style={{
									display: 'flex',
									justifyContent: 'space-around',
									width: 450,
									alignItems: 'center',
								}}
							>
								<h3 style={{ marginTop: 10 }}>TYPESCRIPT</h3>
								<SlClose style={{ fontSize: 20 }} />
							</span>
							<img
								src={card[2].img}
								alt='git'
								width={150}
								height={150}
								style={{ margin: 10 }}
							/>
							<span style={{ padding: 30, marginTop: 10 }}>
								<p>
									На данный момент я в активном изучение TYPESCRIPT, знаю всю
									теорию есть пару маленьких проектов на TS
								</p>
							</span>
							<span
								style={{
									display: 'flex',
									background: 'black',
									width: '100%',
									marginTop: 70,

									justifyContent: 'space-between',
								}}
							>
								<a
									href='https://t.me/houldC'
									style={{
										color: 'blue',
										margin: 33,
										alignItems: 'center',
										display: 'flex',
									}}
								>
									Написать в{' '}
									<FaTelegram style={{ marginLeft: 10, fontSize: 18 }} />
								</a>
							</span>
						</div>
					) : null}
					{openModalWebPack === true ? (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
							onClick={() => setOpenModalWebPack(!openModalWebPack)}
						>
							<span
								style={{
									display: 'flex',
									justifyContent: 'space-around',
									width: '120%',
									alignItems: 'center',
								}}
							>
								<h3 style={{ marginTop: 10 }}>VITE</h3>
								<SlClose style={{ fontSize: 20 }} />
							</span>
							<img
								src={card[1].img}
								alt='git'
								width={150}
								height={150}
								style={{ margin: 10 }}
							/>
							<span style={{ padding: 30, marginTop: 10 }}>
								<p>
									В основном пишу проекты на ViTE ,он существено ускоряет
									интерфейс,по сравнению с Webpack крутая штука
								</p>
							</span>
							<span
								style={{
									display: 'flex',

									marginTop: 70,
									background: 'black',
									width: '100%',
									justifyContent: 'space-between',
								}}
							>
								<a
									href='https://t.me/houldC'
									style={{
										color: 'blue',
										margin: 33,
										alignItems: 'center',
										display: 'flex',
									}}
								>
									Написать в{' '}
									<FaTelegram style={{ marginLeft: 10, fontSize: 18 }} />
								</a>
							</span>
						</div>
					) : null}
					{openModal && (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
							onClick={() => setOpenModal(!openModal)}
						>
							<span
								style={{
									display: 'flex',
									justifyContent: 'space-around',
									width: '120%',
									alignItems: 'center',
								}}
							>
								<h3 style={{ marginTop: 10 }}>JS + REACT + REDUX</h3>
								<SlClose style={{ fontSize: 20 }} />
							</span>
							<span
								style={{
									display: 'flex',
									flexWrap: 'wrap',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<img
									src={card[0].img}
									alt='git'
									width={100}
									height={100}
									style={{ margin: 10 }}
								/>
								<img
									src={imgReact}
									alt='react'
									width={100}
									height={100}
									style={{ margin: 10 }}
								/>
								<img
									src={imgRedux}
									alt='redux'
									width={100}
									height={100}
									style={{ margin: 10 }}
								/>
							</span>

							<span style={{ padding: 27, marginTop: 10 }}>
								<p>
									REACT использую в 90% проектов
									<br />
									<br />
									REDUX использую в большенстве проектов <br />
									<br />
									JS есть все необходимые знания
								</p>
							</span>
							<span
								style={{
									display: 'flex',
									background: 'black',
									width: '100%',
									justifyContent: 'space-between',
								}}
							>
								<a
									href='https://t.me/houldC'
									style={{
										color: 'blue',
										margin: 20,
										alignItems: 'center',
										display: 'flex',
									}}
								>
									Написать в{' '}
									<FaTelegram style={{ marginLeft: 10, fontSize: 18 }} />
								</a>
							</span>
						</div>
					)}
				</div>
			) : null}
		</div>
	);
};
