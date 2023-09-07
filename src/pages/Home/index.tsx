import React from "react";
import { blogs, services, testimonial, whatWeDo } from "../../constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AckPng from "../../assets/calk.png";
import Button from "../../components/Button";
import CheckMark from "../../assets/checkmark.png";
import Hack2 from "../../assets/hack2.png";
import HeroSection from "../../assets/customer.png";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import Check from "../../assets/check.png";
import CallToActionElipse from "../../assets/actionelipse.png";

const HomePage: React.FC = () => {
	return (
		<>
			{/* Services */}
			<div className="bg-[#0A2640] py-[4rem]">
				<div className="w-full lg:w-[842px] mx-auto">
					<h4 className="text-[#F1F1F1] text-center text-[20px] font-400">Our Services</h4>
					<h2 className="text-white font-manrope lg:leading-[72px] lg:text-[48px] text-center">
						Handshake infographic mass market crowdfunding iteration.
					</h2>
				</div>
				<div className="flex justify-center">
					<div className="grid md:grid-cols-2 w-[90%] md:w-[65%] lg:grid-cols-3 items-center gap-[50px] mt-[3rem]">
						{services.map((service, _index: number) => (
							<div key={_index} className="flex flex-col items-center md:items-start">
								<img className="w-full h-[354px]" src={service.img} alt="" />
								<p className="text-white font-400 text-[24px] font-opensans mt-[1.5rem]">
									{service.title}
								</p>
								<div className="flex items-center space-x-2 font-500 mt-2 font-opensans text-white">
									<a href="" className="border-b border-spacing-[2rem]">
										Explore page
									</a>
									<ArrowForwardIcon color="inherit" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="grid md:flex pt-[4rem] lg:pt-[6rem] px-[2rem] lg:px-[10rem] flex-row gap-6">
				<div className="lg:w-1/2 w-full">
					<img src={AckPng} className="lg:w-[494px] w-full lg:h-[610px] h-[400px]" alt="" />
				</div>
				<div className="lg:w-1/2 w-full mx-auto ">
					<div className="lg:w-[493px] font-manrope">
						<h3 className="lg:text-[36px] font-400 lg:leading-[56px]">
							We connect our customers with the best, and help them keep up-and stay open.
						</h3>
						<ul className="space-y-2 my-[3rem]">
							{whatWeDo.map((data) => (
								<li key={data} className="flex items-center space-x-5">
									<img src={CheckMark} alt="" />
									<p>{data}</p>
								</li>
							))}
						</ul>

						<Button
							className="bg-[#0A2640] rounded-[56px] text-[16px] font-700 text-white w-[210px] h-[60px]"
							title="Start now"
						/>
					</div>
				</div>
			</div>

			<div className="grid md:flex pt-[4rem] lg:pt-[6rem] px-[3rem] lg:px-[10rem] flex-row-reverse gap-6 mb-[30px] lg:mb-0">
				<div className="lg:w-1/2 w-full">
					<img src={Hack2} className="w-full lg:w-[494px] h-[450px] lg:h-auto" alt="" />
				</div>
				<div className="lg:w-1/2 w-full mx-auto ">
					<div className="lg:w-[493px] font-manrope">
						<h3 className="lg:text-[36px] font-400 lg:leading-[56px]">
							We connect our customers with the best, and help them keep up-and stay open.
						</h3>
						<ul className="space-y-2 my-[3rem]">
							{whatWeDo.map((data) => (
								<li key={data} className="flex items-center space-x-5">
									<img src={CheckMark} alt="" />
									<p>{data}</p>
								</li>
							))}
						</ul>

						<Button
							className="bg-[#0A2640] rounded-[56px] text-[16px] font-700 text-white w-[210px] h-[60px]"
							title="Start now"
						/>
					</div>
				</div>
			</div>

			<div className="bg-[#0A2640] py-[4rem] px-[30px] md:px-[6rem]">
				<div className="lg:flex lg:flex-row justify-between">
					<div className="w-full mb-[2rem] lg:mb-0">
						<h2 className="text-white md:w-[60%] font-manrope font-400 lg:leading-[72px] lg:text-[48px]">
							An enterprise template to ramp up your company website
						</h2>
					</div>
					<div className="flex  flex-none place-items-end justify-between space-x-10 ">
						<Button
							className="bg-white lg:h-[4rem] h-[3rem] w-[3rem] rotate-180 lg:w-[4rem] flex items-center justify-center rounded-full"
							icon={<ArrowForwardIcon />}
						/>
						<Button
							className="bg-white lg:h-[4rem] h-[3rem] w-[3rem] lg:w-[4rem] flex items-center justify-center rounded-full"
							icon={<ArrowForwardIcon />}
						/>
					</div>
				</div>
				<div className="overflow-x-auto w-[100%] pb-[2rem]">
					<div className="grid grid-cols-3 w-[900px] md:w-[100%] gap-[2rem] md:gap-[5rem] mt-[3rem]">
						{testimonial.map((testimony, _index) => {
							return (
								<div
									key={testimony.id}
									style={{
										height: _index % 2 !== 0 ? "300px" : "250px",
									}}
									className="bg-white w-[100%] flex flex-col items-center justify-between p-[1.5rem] rounded-xl">
									<p className="">{testimony.story}</p>
									<div className="flex items-center mt-[1rem] flex-row space-x-3">
										<div>
											<img
												src={testimony.author.profilePic}
												alt={testimony.author.name}
											/>
										</div>
										<div>
											<h3 className="text-[#0A2640] text-sm md:text-[24px] font-700">
												{testimony.author.name}
											</h3>
											<p className="text-[#0A2640] text-[14px] font-400">
												{testimony.author.role}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className="lg:px-[10rem] px-[3rem] my-[3rem] lg:my-[6rem]">
				<img src={HeroSection} className="w-full bg-cover" alt="" />
				<div className="grid grid-cols-1 md:grid-cols-2  py-[3rem] gap-[2rem] lg:gap-[4rem]">
					<h3 className="lg:font-400 font-manrope text-[20px] lg:text-[36px] text-left">
						We connect our customers with the best, and help them keep up-and stay open.
					</h3>
					<div className="space-y-[3rem]">
						<Accordion>
							<AccordionSummary
								expandIcon={<img src={Check} />}
								aria-controls="panel1a-content"
								id="panel1a-header">
								<Typography>We connect our customers with the best?</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
									lacus ex, sit amet blandit leo lobortis eget.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<img src={Check} />}
								aria-controls="panel1a-content"
								id="panel1a-header">
								<Typography>Android research & development rockstar? </Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
									lacus ex, sit amet blandit leo lobortis eget.
								</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
				</div>
			</div>

			{/* Our Blog Section */}

			<div className="bg-white px-[2rem] md:px-[7rem] w-full pb-[4rem]">
				<div className="w-[80%] mx-auto mb-[2rem]">
					<h4 className="text-[#777777] text-center text-[20px] font-400">Our Blog</h4>
					<h2 className="text-[#000000] font-manrope lg:leading-[58px] lg:text-[48px] text-center">
						Value proposition accelerator product management venture
					</h2>
				</div>
				<div className="">
					<div className="grid grid-1 md:grid-cols-3 gap-5 w-full">
						{blogs.map((blog, _index: number) => (
							<div key={_index} className=" mb-[1.5rem] lg:mb-0 lg:w-full mt-[1rem]">
								<div className="">
									<img src={blog.img} alt="" className="h-[250px] w-full" />
								</div>
								<div className="lg:py-[2rem] mb-2">
									<div className="flex items-center py-[1rem] space-x-3">
										<span className="text-[#0A2640] font-700 font-opensans text-[16px] capitalize">
											{blog.category}
										</span>
										<span className="text-[#777777] text-[16px] font-opensans">
											{blog.date}
										</span>
									</div>
									<div className="lg:text-[20px] tex-[16px]">{blog.content}</div>
								</div>
								<div className="flex gap-3 items-center">
									<img
										src={blog.author.profilePic}
										className="h-[32px] w-[32px] rounded-full object-cover"
										alt=""
									/>
									<span>{blog.author.name}</span>
								</div>
							</div>
						))}
					</div>
					<Button title="Load more" className="w-[219px] rounded-[56px] h-[60px]" />
				</div>
			</div>

			{/* Call to action */}
			<div className="w-full md:px-[2rem] lg:px-0">
				<div className="bg-[#0A2640] p-2 relative flex flex-col justify-center items-center rounded-[12px] py-[3rem] mx-0 lg:mx-[6rem] lg:py-[5rem]">
					<div className="z-0 hidden lg:grid">
						<img src={CallToActionElipse} className="absolute top-0 right-0" alt="" />
					</div>
					<div className="w-full lg:w-[50%] z-100 relative">
						<h3 className="font-manrope px-2 md:px-0 lg:text-[48px] text-center lg:leading-[62px] font-400 text-white ">
							An enterprise template to ramp up your company website
						</h3>
						<div className="flex flex-col lg:flex-row md:items-center gap-2 px-[2rem] lg:px-0 lg:justify-center mt-6">
							<input
								type="email"
								className="border-none outline-none lg:px-6 p-3 lg:py-5 rounded-full w-full lg:w-[60%] mb-3"
								placeholder="Your email address"
							/>
							<Button
								className="bg-[#65E4A3] w-full lg:w-[210px] p-3 lg:p-0 lg:h-[60px] rounded-[30px] lg:rounded-[56px] lg:font-700"
								title="Start now"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
