import React from "react";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Code,
	Database,
	Brain,
	Cloud,
	Shield,
	Server,
	Github,
	Linkedin,
	Mail,
} from "lucide-react";
import { cn } from "../lib/utils";

export const HeroHighlight = () => {
	return (
		<div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center py-12 md:py-0">
			{/* Radial gradient for the container to give a faded look */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

			<div className="text-center z-20 max-w-6xl mx-auto px-4 md:px-6">
				{/* Animated greeting
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-6">
					<span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
						👋 Welcome to my portfolio
					</span>
				</motion.div> */}

				{/* Main heading with highlight effect */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-tight md:leading-relaxed lg:leading-snug text-center mx-auto mb-6 md:mb-8">
					Software Engineer{" "}
					<HighlightText className="text-black dark:text-white">
						Specializing in Backend
					</HighlightText>
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-base md:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
					Fullstack developer specializing in robust backend systems, AI
					integration, cloud infrastructure, and security-first solutions.
				</motion.p>

				{/* Tech stack floating badges */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
					{[
						{ icon: Server, label: "Backend APIs", color: "blue" },
						{ icon: Brain, label: "AI Integration", color: "purple" },
						{ icon: Database, label: "Database Design", color: "green" },
						{ icon: Cloud, label: "Cloud Infrastructure", color: "cyan" },
						{ icon: Shield, label: "Security First", color: "red" },
						{ icon: Code, label: "Clean Code", color: "orange" },
					].map((tech, index) => {
						const IconComponent = tech.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
								whileHover={{ scale: 1.05, y: -2 }}
								className="group relative">
								<div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300">
									<IconComponent className="w-3 md:w-4 h-3 md:h-4 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300" />
									<span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
										{tech.label}
									</span>
								</div>
								{/* Floating effect */}
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/20 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Action buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						onClick={() => {
							const element = document.getElementById("projects");
							if (element) element.scrollIntoView({ behavior: "smooth" });
						}}
						className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-lg font-medium transition-all duration-300 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-sm md:text-base">
						View My Work
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
					</motion.button>

					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						onClick={() => {
							const element = document.getElementById("contact");
							if (element) element.scrollIntoView({ behavior: "smooth" });
						}}
						className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg font-medium transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-sm md:text-base">
						Get In Touch
					</motion.button>
				</motion.div>

				{/* Social links */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="flex justify-center gap-6">
					{[
						{
							icon: Github,
							href: "https://github.com/bernard-As",
							label: "GitHub",
						},
						{
							icon: Linkedin,
							href: "https://www.linkedin.com/in/mahougnon-bernard-de-montfort-a-3680a12b2/",
							label: "LinkedIn",
						},
						{
							icon: Mail,
							href: "mailto:montfortassogba2@gmail.com",
							label: "Email",
						},
					].map((social, index) => {
						const IconComponent = social.icon;
						return (
							<motion.a
								key={index}
								href={social.href}
								whileHover={{ scale: 1.1, y: -2 }}
								whileTap={{ scale: 0.95 }}
								target="_blank"
								className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300 hover:shadow-lg"
								aria-label={social.label}>
								<IconComponent className="w-5 h-5" />
							</motion.a>
						);
					})}
				</motion.div>
			</div>

			{/* Floating elements */}
			<FloatingElements />
		</div>
	);
};

const HighlightText = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<motion.span
			initial={{
				backgroundSize: "0% 100%",
			}}
			animate={{
				backgroundSize: "100% 100%",
			}}
			transition={{
				duration: 2,
				ease: "linear",
				delay: 1,
			}}
			style={{
				backgroundRepeat: "no-repeat",
				backgroundPosition: "left center",
				display: "inline",
			}}
			className={cn(
				`relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-primary-300 to-primary-500 dark:from-primary-600 dark:to-primary-800`,
				className
			)}>
			{children}
		</motion.span>
	);
};

const FloatingElements = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{/* Floating geometric shapes */}
			<motion.div
				animate={{
					y: [0, -20, 0],
					rotate: [0, 180, 360],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "linear",
				}}
				className="absolute top-20 left-[10%] w-4 h-4 bg-primary-400 rounded-full opacity-30"
			/>
			<motion.div
				animate={{
					y: [0, 30, 0],
					rotate: [0, -180, -360],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: "linear",
				}}
				className="absolute top-40 right-[15%] w-6 h-6 bg-blue-400 rounded-full opacity-20"
			/>
			<motion.div
				animate={{
					y: [0, -25, 0],
					x: [0, 10, 0],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "linear",
				}}
				className="absolute bottom-32 left-[20%] w-3 h-3 bg-green-400 rounded-full opacity-25"
			/>
			<motion.div
				animate={{
					y: [0, 15, 0],
					rotate: [0, 90, 180],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: "linear",
				}}
				className="absolute bottom-20 right-[25%] w-5 h-5 bg-purple-400 rounded-full opacity-30"
			/>

			{/* Code symbols floating */}
			<motion.div
				animate={{
					y: [0, -30, 0],
					opacity: [0.3, 0.6, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute top-[30%] left-[5%] text-primary-400 text-2xl font-mono opacity-30">
				{"</>"}
			</motion.div>
			<motion.div
				animate={{
					y: [0, 25, 0],
					opacity: [0.2, 0.5, 0.2],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute top-[60%] right-[8%] text-blue-400 text-xl font-mono opacity-20">
				{"{}"}
			</motion.div>
			<motion.div
				animate={{
					y: [0, -20, 0],
					opacity: [0.25, 0.5, 0.25],
				}}
				transition={{
					duration: 14,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute bottom-[40%] left-[8%] text-green-400 text-lg font-mono opacity-25">
				{"()"}
			</motion.div>
		</div>
	);
};

export default HeroHighlight;
