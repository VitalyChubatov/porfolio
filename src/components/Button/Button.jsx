import React from 'react';
import { FaPowerOff } from 'react-icons/fa';

export const Button = ({ leftHand, isActive }) => {
	return (
		<div>
			{isActive ? (
				<FaPowerOff
					onClick={leftHand}
					style={{ color: 'yellow', paddingLeft: 20 }}
				/>
			) : (
				<FaPowerOff
					onClick={leftHand}
					style={{ color: 'black', paddingLeft: 20 }}
				/>
			)}
		</div>
	);
};
