import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../Redux/slice';

export const Button = () => {
	const dispatch = useDispatch();
	const isCompleted = useSelector(state => state.themeSlice.isActive);
	const toogleTheme = () => {
		dispatch(theme(!isCompleted));
	};

	return (
		<div>
			{isCompleted ? (
				<FaPowerOff
					onClick={toogleTheme}
					style={{ color: 'yellow', paddingLeft: 20, cursor: 'pointer' }}
				/>
			) : (
				<FaPowerOff
					onClick={toogleTheme}
					style={{ color: 'black', paddingLeft: 20, cursor: 'pointer' }}
				/>
			)}
		</div>
	);
};
