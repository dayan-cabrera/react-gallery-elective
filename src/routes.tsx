import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Gallery } from "./components";

const CustomRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/gallery" element={<Gallery />} />
		</Routes>
	);
};

export const routesMap = {
	home: "/",
	gallery: "/gallery",
};

export default CustomRoute;
