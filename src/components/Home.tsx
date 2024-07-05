import React from "react";

const Home = () => {
	return (
		<>
			<div className="section light-color-gradient h-[85vh] flex justify-center">
				<div className="container" style={{ opacity: 1 }}>
					<div className="w-layout-grid hero-grid">
						<div className="text-box _500px">
							<h1 className="heading h1">Wallpaper platform</h1>
							<p className="paragraph large">
								"Discover wonderful high-resolution wallpapers
								that are just a click away"
							</p>
							<div className="spacer _16"></div>
							<a href="/gallery" className="button w-button">
								Get Now
							</a>
						</div>
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/logo.jpg`}
							loading="eager"
							width="337"
							id="w-node-_2c511369-eabb-a0ff-6024-6e8ecffbdf82-40ac4d19"
							alt=""
							className="hero-illustration"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
