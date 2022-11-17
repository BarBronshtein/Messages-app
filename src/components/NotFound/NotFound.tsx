import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
	const scareCrowImg =
		'https://raw.githubusercontent.com/BarBronshtein/Bar-Bronshtein-19-10-22/main/src/assets/imgs/Scarecrow.png';
	return (
		<section className="not-found" min-h-screen>
			<header className="main-header p-y-5">
				<h3 className="uppercase text-2xl leading-6 font-bold">404 not found</h3>
			</header>
			<section className="main-content">
				<div className="img-container">
					<img className="max-w-full p-x-5" src={scareCrowImg} alt="" />
				</div>
				<div className="description mt-14">
					<h2 className="text-5xl">I have bad news for you</h2>
					<p className="text-normal text-xl">
						The page you are lookin for might be removed or is temporarily unavailable
					</p>
					<button className="btn action-btn uppercase mt-16 text-bold leading-5 p-[1.5625rem 2.8125rem]">
						<Link to="/">Back to Homepage</Link>
					</button>
				</div>
			</section>
		</section>
	);
};

export default NotFound;
