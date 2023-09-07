/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				opensans: ["Open Sans", "sans"],
				manrope: ["Manrope", "sans-serif"],
			},
			fontWeight: {
				400: 400,
				700: 700,
			},
			screens: {
				xs: "290px",
			},
		},
	},
	plugins: [],
};
