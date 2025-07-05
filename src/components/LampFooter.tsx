import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { cn } from "../lib/utils";

export const LampFooter = () => {
	const socialLinks = [
		{ icon: Github, href: "https://github.com/bernard-As", label: "GitHub" },
		{
			icon: Linkedin,
			href: "https://www.linkedin.com/in/mahougnon-bernard-de-montfort-a-3680a12b2/",
			label: "LinkedIn",
		},
		{ icon: Mail, href: "mailto:montfortassogba2@gmail.com", label: "Email" },
	];

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<LampContainer>
      <div className="h-5"></div>
			<motion.div
				initial={{ opacity: 0.5, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="text-center mb-6 md:mb-8 pt-12 md:pt-20 mt-8 md:mt-20 px-4">
				<h2 className="mt-6 md:mt-10 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium tracking-tight text-transparent">
					Let's Build Something <br />
					<span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
						Amazing Together
					</span>
				</h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.6 }}
					className="text-slate-400 text-base md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto px-4">
					Ready to bring your ideas to life? Let's discuss your next project and
					create something extraordinary with cutting-edge technology.
				</motion.p>

				{/* Action Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.6 }}
					className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8 mb-8 md:mb-12 px-4">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => scrollToSection("contact")}
						className="px-6 md:px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
						Start a Project
					</motion.button>

					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => window.open("mailto:montfortassogba2@gmail.com")}
						className="px-6 md:px-8 py-3 border border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 rounded-lg font-medium transition-all duration-300 text-sm md:text-base">
						Send Message
					</motion.button>
				</motion.div>
			</motion.div>

			{/* Footer Content */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.9, duration: 0.8 }}
				className="w-full max-w-6xl mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
					{/* Brand */}
					<div className="md:col-span-2 mb-6 md:mb-0">
						<div className="flex items-center mb-4">
							<div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-sm">P</span>
							</div>
							<span className="ml-2 text-lg md:text-xl font-bold text-slate-300">
								M. Bernard D. M. ASSOGBA
							</span>
						</div>
						<p className="text-slate-400 mb-6 max-w-md text-sm md:text-base">
							Fullstack developer specializing in backend systems, AI
							integration, and cloud infrastructure. Let's build something
							amazing together.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((link, index) => {
								const IconComponent = link.icon;
								return (
									<motion.a
										key={index}
										href={link.href}
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
                    target="_blank"
										className="p-3 bg-slate-800/50 hover:bg-primary-600/20 border border-slate-700 hover:border-primary-500 rounded-lg transition-all duration-300 backdrop-blur-sm"
										aria-label={link.label}>
										<IconComponent className="w-5 h-5 text-slate-400 hover:text-primary-400 transition-colors duration-300" />
									</motion.a>
								);
							})}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-lg mb-4 text-slate-300">
							Quick Links
						</h3>
						<ul className="space-y-3">
							{["About", "Skills", "Projects", "Contact"].map((item, index) => (
								<motion.li
									key={item}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}>
									<button
										onClick={() => scrollToSection(item.toLowerCase())}
										className="text-slate-400 hover:text-primary-400 transition-all duration-200 flex items-center gap-2 group">
										<ArrowUp className="w-3 h-3 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-200" />
										{item}
									</button>
								</motion.li>
							))}
						</ul>
					</div>

					{/* Specialties */}
					<div>
						<h3 className="font-semibold text-lg mb-4 text-slate-300">
							Specialties
						</h3>
						<ul className="space-y-3">
							{[
								"Backend APIs",
								"AI Integration",
								"Cloud Infrastructure",
								"Database Design",
							].map((item, index) => (
								<motion.li
									key={item}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
									className="text-slate-400">
									{item}
								</motion.li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 0.6 }}
					className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-slate-500 text-sm">
						© {new Date().getFullYear()} Bernard Assogba. All rights reserved.
					</p>
					{/* <p className="text-slate-500 text-sm flex items-center mt-4 md:mt-0">
						Made with{" "}
						<Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> using
						React & TypeScript
					</p> */}
				</motion.div>
			</motion.div>
		</LampContainer>
	);
};

export const LampContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0 px-4",
				className
			)}>
			<div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
				<motion.div
					initial={{ opacity: 0.5, width: "10rem" }}
					whileInView={{ opacity: 1, width: "20rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="absolute inset-auto right-1/2 h-56 overflow-visible w-[20rem] md:w-[30rem] bg-gradient-conic from-primary-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
					<div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
					<div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
				</motion.div>
				<motion.div
					initial={{ opacity: 0.5, width: "10rem" }}
					whileInView={{ opacity: 1, width: "20rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="absolute inset-auto left-1/2 h-56 w-[20rem] md:w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary-500 text-white [--conic-position:from_290deg_at_center_top]">
					<div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
					<div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
				</motion.div>
				<div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
				<div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
				<div className="absolute inset-auto z-50 h-36 w-[20rem] md:w-[28rem] -translate-y-1/2 rounded-full bg-primary-500 opacity-50 blur-3xl"></div>
				<motion.div
					initial={{ width: "6rem" }}
					whileInView={{ width: "12rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="absolute inset-auto z-30 h-36 w-48 md:w-64 -translate-y-[6rem] rounded-full bg-primary-400 blur-2xl"></motion.div>
				<motion.div
					initial={{ width: "10rem" }}
					whileInView={{ width: "20rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="absolute inset-auto z-50 h-0.5 w-[20rem] md:w-[30rem] -translate-y-[7rem] bg-primary-400"></motion.div>

				<div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
			</div>

			<div className="relative z-50 flex -translate-y-80 flex-col items-center px-2 md:px-5">
				{children}
			</div>
		</div>
	);
};

export default LampFooter;
