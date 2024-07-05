import React from "react";
import "../index.css";
import { Link, useLocation } from "react-router-dom";
import { routesMap } from "../routes";

const Navbar: React.FC = () => {
	const location = useLocation();
	return (
		<>
			<div
				data-collapse="small"
				data-animation="default"
				data-duration="400"
				data-easing="ease"
				data-easing2="ease"
				role="banner"
				className="nav-bar w-nav">
				<div className="nav-container w-container">
					<div className="logo-div">
						<Link
							to={routesMap.home}
							aria-current="page"
							className="nav-logo w-inline-block w--current">
							<img
								src={`${process.env.PUBLIC_URL}/assets/images/logo.jpg`}
								width="70"
								alt="Memberbase Logo"
								className="logo rounded-full"
							/>
						</Link>
					</div>
					<nav role="navigation" className="nav-content w-nav-menu">
						<div className="search-banner">
							<div className="search-section">
								<form
									action="/search"
									className="search w-form"></form>
							</div>
						</div>
						<div
							className={`${
								location.pathname === routesMap.home
									? "nav-link cta-button w-nav-lin"
									: "nav-link w-nav-link"
							}`}>
							<Link
								to={routesMap.home}
								className={`${
									location.pathname === routesMap.home
										? "nav-cta-button-container"
										: "nav-menu"
								}`}
								style={{ maxWidth: "1230px" }}>
								Home
							</Link>
						</div>

						<div
							className={`${
								location.pathname === routesMap.gallery
									? "nav-link cta-button w-nav-lin"
									: "nav-link w-nav-link"
							}`}>
							<Link
								to={routesMap.gallery}
								className={`${
									location.pathname === routesMap.gallery
										? "nav-cta-button-container"
										: "nav-menu"
								}`}
								style={{ maxWidth: "1230px" }}>
								Gallery
							</Link>
						</div>
					</nav>
					<div
						className="menu-button w-nav-button"
						style={{ WebkitUserSelect: "text" }}
						aria-label="menu"
						role="button"
						aria-haspopup="menu">
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/background.jpg`}
							loading="lazy"
							width="24"
							alt=""
							className="menu-icon"
						/>
					</div>
					<div
						className="w-nav-overlay"
						data-wf-ignore=""
						id="w-nav-overlay-0"></div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
