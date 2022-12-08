import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
	const scareCrowImg =
		'https://raw.githubusercontent.com/BarBronshtein/Bar-Bronshtein-19-10-22/main/src/assets/imgs/Scarecrow.png';
	return (
		<section className="not-found container px-4 m-auto grid-cols-3 min-h-screen">
			<header className="main-header py-5 lg:py-10">
				<h3 className="uppercase text-2xl leading-6 font-bold ">404 not found</h3>
			</header>
			<section className="main-content lg:flex">
				<div className="img-container md:flex justify-center">
					<img
						className="max-w-full p-x-5 md:max-w-[50%] lg:max-w-full"
						src={scareCrowImg}
						alt=""
					/>
				</div>
				<div className="description mt-14 lg:ml-24">
					<h2 className="text-3xl md:text-5xl lg:text-5xl mb-9 max-w-[600px] tracking-tight">
						I have bad news for you
					</h2>
					<p className="text-normal text-lg md:text-xl mt-7 text-normal">
						The page you are lookin for might be removed or is temporarily unavailable
					</p>
					<Link className="p-2" to="/">
						<button className="btn bg-gray-200 hover:bg-gray-300 uppercase mt-8 lg:mt-16 mb-4 text-bold leading-5 p-6">
							Back to Homepage
						</button>
					</Link>
				</div>
			</section>
		</section>
	);
};

export default NotFound;
