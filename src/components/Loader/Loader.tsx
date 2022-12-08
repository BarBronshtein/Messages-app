import React from 'react';

import { motion, Transition } from 'framer-motion';
import './Loader.css';
const loadingContainerVariants = {
	start: {
		transition: {
			staggerChildren: 0.2,
		},
	},
	end: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const loadingCircleVariants = {
	start: {
		y: '0%',
	},
	end: {
		y: '60%',
	},
};
const loadingCircleTransition: Transition = {
	duration: 0.4,
	repeatType: 'reverse',
	repeat: Infinity,
	ease: 'easeInOut',
};
type Props = {
	width?: string;
	height?: string;
	smallWidth?: string;
	smallHeight?: string;
	color?: string;
};
const Loader = (props: Props) => {
	const loadingContainer = {
		width: props.width || '4rem',
		height: props.height || '4rem',
		display: 'flex',
		margin: 'auto',
		justifyContent: 'space-around',
	};

	const loadingCircle = {
		display: 'block',
		width: props.smallWidth || '1rem',
		height: props.smallHeight || '1rem',
		background:
			props.color || document.body.classList.contains('dark') ? '#fff' : '#333',
		borderRadius: '0.5rem',
	};

	return (
		<div className="loader">
			<div className="pos-relative">
				<motion.div
					style={loadingContainer}
					variants={loadingContainerVariants}
					initial="start"
					animate="end"
				>
					<motion.span
						className="circle"
						style={loadingCircle}
						variants={loadingCircleVariants}
						transition={loadingCircleTransition}
					></motion.span>
					<motion.span
						className="circle"
						style={loadingCircle}
						variants={loadingCircleVariants}
						transition={loadingCircleTransition}
					></motion.span>
					<motion.span
						className="circle"
						style={loadingCircle}
						variants={loadingCircleVariants}
						transition={loadingCircleTransition}
					></motion.span>
				</motion.div>
			</div>
		</div>
	);
};

export default Loader;
