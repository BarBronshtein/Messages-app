import React from 'react';

const DefaultChat = ({ className }: { className: string }) => {
	return (
		<div
			className={`${className}} bg-[top_8rem] bg-cover bg-[url('https://www.shutterstock.com/image-illustration/social-media-colored-seamless-pattern-260nw-1338496568.jpg')]`}
		>
			{/* <div className="hero absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<img
					src="https://www.shutterstock.com/image-illustration/social-media-colored-seamless-pattern-260nw-1338496568.jpg"
					alt="welcome image"
				/>
			</div> */}
		</div>
	);
};

export default DefaultChat;
