import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";

const HomeLayout: React.FC = () => {
	return (
		<div className="font-opensans mx-auto relative h-[100vh]">
			<BannerSection />
			<Outlet />
			<div className="md:px-[6rem] px-[1rem]">
				<Footer />
			</div>
		</div>
	);
};

export default HomeLayout;
