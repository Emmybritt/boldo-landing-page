import React from "react";
import Header from "../Header";
import Button from "../Button";
import HeroBanner from "../../assets/HeroGraphicsbanner.png";
// import Partner from "../../assets/partner.png";
import Partners from "../Partners";

const BannerSection: React.FC = () => {
	return (
		<div className="w-full relative">
			<div>
				<Header />
			</div>
			<div className=" grid lg:hidden h-[70px]"></div>
			<div className="grid lg:flex relative items-center px-[2rem] lg:px-[6rem] lg:pt-[7rem] justify-between py-[2rem]">
				<div className="w-full mb-[30px] lg:w-[60%] h-full">
					<div className="mb-[30px]">
						<h3 className="text-[30px] lg:text-[48px] md:w-[70%] font-manrope lg:leading-[72px] font-400">
							Save time by building fast with Boldo Template{" "}
						</h3>
						<p className="text-[#777777] w-full lg:w-[70%] text-[16px] font-opensans mt-[1.5rem]">
							Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage
							innovator success deployment non-disclosure.
						</p>
					</div>
					<div className="flex flex-col xs:flex-row xs:items-center xs:space-y-0 space-y-2 xs:space-x-3 bottom-2">
						<Button
							className="bg-[#0A2640] text-[13px] md:text-[16px] font-bold h-[50px] text-white"
							title="Buy template"
						/>
						<Button title="Explore" className="text-[13px] md:text-[16px] h-[50px]" />
					</div>
				</div>
				<div className=" w-full lg:w-[40%]">
					<img src={HeroBanner} className="w-full" alt="" />
				</div>
			</div>
			<div className="py-[4rem] w-full md:px-[8rem] ">
				<Partners />
			</div>
		</div>
	);
};

export default BannerSection;
