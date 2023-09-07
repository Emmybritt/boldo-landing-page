import React from "react";
import "./style.css";

type ButtonAttr = {
	title?: string;
	onClick?: () => void;
	className?: string;
	icon?: React.ReactNode;
};

const Button: React.FC<ButtonAttr> = ({ title, onClick, className, icon }) => {
	const btnClass = `btn__login ${className}`;
	return (
		<>
			<button onClick={onClick} className={btnClass}>
				{title}
				{icon}
			</button>
		</>
	);
};

export default Button;
