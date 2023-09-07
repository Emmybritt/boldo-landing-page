import React, { useState } from "react";
import Logo from "../../assets/Logoboldlogo.png";
import "./style.css";
import { HeaderLink } from "../../constants";
import Button from "../Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header: React.FC = () => {
	const [show, setShow] = useState<boolean>(false);
	const toggleShow = () => {
		setShow(!show);
	};
	return (
		<>
			<div className="flex fixed w-full z-50 bg-white items-center px-[2rem] lg:px-[6rem] justify-between py-[1.7rem]">
				<img src={Logo} alt="logo" className="header__logo" />
				<div className="lg:flex hidden">
					<ul className="flex items-center space-x-[40px] font-[600px] font-opensans">
						{HeaderLink.map((link, _num: number) => (
							<div key={_num}>
								{link.isButton ? (
									<Button title={link.name.toString()} />
								) : (
									<li className="text-[16px] text-[#0A2640]">{link.name}</li>
								)}
							</div>
						))}
					</ul>
				</div>

				<div className="lg:hidden mg:grid">
					{show === false && (
						<button onClick={toggleShow}>
							<MenuIcon />
						</button>
					)}
					{show === true && (
						<button onClick={toggleShow}>
							<CloseIcon />
						</button>
					)}
				</div>
			</div>

			{show && (
				<div className="lg:hidden fixed z-50 bg-white grid w-full h-screen">
					<div className="flex justify-between pt-[1rem]">
						<div></div>
						<div>
							<Button onClick={toggleShow} className="border-none" icon={<CloseIcon fontSize="large" />} />
						</div>
					</div>
					<ul className="flex flex-col -mt-[15rem] items-center lg:space-x-[40px] lg:font-[600px] font-opensans">
						{HeaderLink.map((link, _num: number) => (
							<div key={_num}>
								{link.isButton ? (
									<Button
										title={link.name.toString()}
										className="text-[16px] text-xl font-bold text-[#0A2640]"
									/>
								) : (
									<li className="text-[16px] text-xl font-bold text-[#0A2640] mb-[20px] lg:mb-0">
										{link.name}
									</li>
								)}
							</div>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default Header;
