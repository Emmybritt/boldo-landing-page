import React from "react";
import BoldoLogo from "../../assets/Logoboldlogo.png";
import "./style.css";
import { FooterLink, FooterLinks, Link } from "../../constants";

const Footer: React.FC = () => {
	return (
		<div className="bottom-0 lg:h-[474px] py-[50px] lg:py-auto w-full flex items-center">
			<div className="lg:flex flex flex-col-reverse lg:flex-row justify-between w-full">
				<div className="lg:w-[40%] w-full items-center lg:items-start flex-col flex mt-[2rem] lg:mt-0">
					<div className="flex justify-center lg:justify-start">
						<img className="footer__logo" src={BoldoLogo} alt="logo" />
					</div>
					<p className="footer__text text-center lg:text-left">
						Social media validation business model canvas graphical user interface launch party creative facebook
						iPad twitter.
					</p>
					<p className="footer__text text-center lg:text-left">All rights reserved.</p>
				</div>
				<div className="lg:w-[60%] w-full">
					<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 md:gap-3 md:items-center lg:flex-row lg:justify-evenly w-full">
						{FooterLinks.map((data: FooterLink, _index: number) => {
							return (
								<div className="mb-3" key={_index}>
									<h3 className="text-[20px] font-opensans text-[#000000] mb-6 font-bold">
										{data.header}
									</h3>
									<ul className="space-y-[32px]">
										{data.links.map((link: Link, _index: number) => (
											<li className="text-[#777777] relative" key={_index}>
												<a href="" className="text-center lg:text-start">
													{link.name}
												</a>
												{link.toolTip && (
													<span className="bg-[#65E4A3] font-semibold ml-2 text-xs px-2 py-1 text-[#0A2640] rounded-2xl ">
														{link.toolTip}
													</span>
												)}
											</li>
										))}
									</ul>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
