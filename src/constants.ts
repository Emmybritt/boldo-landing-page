import Service1 from "./assets/service1.png";
import Service2 from "./assets/service2.png";
import Service3 from "./assets/service3.png";
import User1 from "./assets/albus.png";
import User2 from "./assets/severus.png";
import User3 from "./assets/harry.png";
import Blog1 from "./assets/blog.png";
import Blog2 from "./assets/blog2.png";
import Blog3 from "./assets/blog3.png";
import Partner1 from "./assets/Logoprestologo.png";
import Partner2 from "./assets/Logoboldologo.png";

export interface Link {
	to: string;
	name: string;
	toolTip?: string;
}

export interface FooterLink {
	header: string;
	links: Link[];
}

export const FooterLinks: FooterLink[] = [
	{
		header: "Landing",
		links: [
			{ to: "blog", name: "Blog" },
			{ to: "products", name: "Products" },
			{ to: "service", name: "Services" },
		],
	},
	{
		header: "Company",
		links: [
			{ to: "home", name: "Home" },
			{ to: "careers", name: "Career", toolTip: "Hiring!" },
			{ to: "service", name: "Services" },
		],
	},
	{
		header: "Resource",
		links: [
			{ to: "blog", name: "Blog" },
			{ to: "products", name: "Products" },
			{ to: "service", name: "Services" },
		],
	},
];

export const HeaderLink: Record<string, string | boolean>[] = [
	{
		name: "Product",
		to: "product",
	},
	{
		name: "Services",
		to: "service",
	},
	{
		name: "About",
		to: "about",
	},
	{
		name: "Log in",
		to: "login",
		isButton: true,
	},
];

export const services: Record<string, string>[] = [
	{ img: Service1, title: "Cool feature ride", to: "feature-ride" },
	{ img: Service2, title: "Even Cooler feature", to: "feature-ride" },
	{ img: Service3, title: "Cool feature Title", to: "feature-ride" },
];

export const whatWeDo = ["We connect our customers with the best.", "Advisor success customer launch party.", "Business-to-consumer long tail."];

export const testimonial = [
	{
		id: 1,
		story: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
		author: {
			name: "Albus Dumbledore",
			role: "Manager @ Howarts",
			profilePic: User1,
		},
	},
	{
		id: 2,
		story: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
		author: {
			name: "Albus Dumbledore",
			role: "Manager @ Slytherin",
			profilePic: User2,
		},
	},
	{
		id: 3,
		story: "“Release facebook responsive web design business model canvas seed money monetization.”",
		author: {
			name: "Harry Potter",
			role: "Team Leader @ Gryffindor",
			profilePic: User3,
		},
	},
];

export const blogs = [
	{
		img: Blog1,
		category: "finance",
		date: "November 22, 2021",
		content: "Pitch termsheet backing validation focus release.",
		author: { name: "Chandler Bing", profilePic: User1 },
	},
	{
		img: Blog2,
		category: "finance",
		date: "November 22, 2021",
		content: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
		author: { name: "Rachael Green", profilePic: User2 },
	},
	{
		img: Blog3,
		category: "rock",
		date: "November 22, 2021",
		content: "Beta prototype sales iPad gen-z marketing network effects value proposition",
		author: { name: "Monica Geller", profilePic: User3 },
	},
];

export const partners = [Partner1, Partner2, Partner1, Partner2, Partner1, Partner2];
