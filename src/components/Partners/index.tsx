// src/components/Partners.js

import React from "react";
import { motion } from "framer-motion";
import { partners } from "../../constants";
import "./style.css";

const Partners: React.FC = () => {
	return (
		<div className="partners-container">
			<motion.div
				className="marquee"
				initial={{ x: "100%" }}
				animate={{ x: "-100%" }}
				transition={{
					duration: 90, // Adjust the duration as needed.
					ease: "linear", // Linear easing for a continuous animation.
					repeat: Infinity, // Repeat the animation infinitely.
				}}>
				{partners.map((partner, index) => (
					<div key={index} className="ml-[2rem]">
						<img src={partner} className="" alt="" />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default Partners;
