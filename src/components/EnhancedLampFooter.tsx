import React from "react";
import { motion } from "framer-motion";
import {
	Github,
	Linkedin,
	Mail,
	Heart,
	ArrowUp,
	Download,
	ExternalLink,
} from "lucide-react";
import { cn } from "../lib/utils";

export const EnhancedLampFooter = () => {
	const socialLinks = [
		{ icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
		{
			icon: Linkedin,
			href: "#",
			label: "LinkedIn",
			color: "hover:text-blue-400",
		},
		{
			icon: Mail,
			href: "mailto:your.email@example.com",
			label: "Email",
			color: "hover:text-red-400",
		},
	];

	const quickLinks = [
		{ name: "About", id: "about" },
		{ name: "Skills", id: "skills" },
		{ name: "Projects", id: "projects" },
		{ name: "Contact", id: "contact" },
	];

	const specialties = [
		"Backend APIs",
		"AI Integration",
		"Cloud Infrastructure",
		"Database Design",
	];

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<LampContainer>
			{/* Main CTA Section */}
			<motion.div
				initial={{ opacity: 0.5, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="text-center mb-16">
				<h2 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl lg:text-7xl">
					Ready to Build <br />
					<span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
						The Future?
					</span>
				</h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.6 }}
					className="text-slate-400 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
					Let's collaborate on innovative solutions that push boundaries. From
					scalable backend systems to cutting-edge AI integration, together we
					can create something extraordinary.
				</motion.p>

				{/* Enhanced Action Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.6 }}
					className="flex flex-col sm:flex-row gap-4 justify-center mt-10 mb-16">
					<motion.button
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => scrollToSection("contact")}
						className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">
						<span className="relative z-10 flex items-center gap-2">
							Start a Project
							<ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
						</span>
						<div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</motion.button>

					<motion.button
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
						className="group px-8 py-4 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm bg-slate-800/20 hover:bg-slate-700/30">
						<span className="flex items-center gap-2">
							<Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
							Download CV
						</span>
					</motion.button>
				</motion.div>

				{/* Stats Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9, duration: 0.6 }}
					className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
					{[
						{ value: "5+", label: "Years Experience", color: "text-blue-400" },
						{
							value: "50+",
							label: "Projects Completed",
							color: "text-green-400",
						},
						{
							value: "99%",
							label: "Client Satisfaction",
							color: "text-purple-400",
						},
						{
							value: "24/7",
							label: "Support Available",
							color: "text-orange-400",
						},
					].map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
							whileHover={{ scale: 1.05 }}
							className="text-center p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
							<div
								className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
								{stat.value}
							</div>
							<div className="text-sm text-slate-400">{stat.label}</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			{/* Footer Content */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.3, duration: 0.8 }}
				className="w-full max-w-6xl mx-auto px-6">
				<div className="grid md:grid-cols-4 gap-8 mb-12">
					{/* Brand */}
					<div className="md:col-span-2">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 1.5, duration: 0.6 }}
							className="flex items-center mb-6">
							<div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
								<span className="text-white font-bold text-lg">P</span>
							</div>
							<span className="ml-3 text-2xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
								Portfolio
							</span>
						</motion.div>
						<motion.p
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 1.6, duration: 0.6 }}
							className="text-slate-400 mb-8 max-w-md leading-relaxed">
							Transforming ideas into robust, scalable solutions. Specializing
							in backend architecture, AI integration, and cloud infrastructure
							for the modern web.
						</motion.p>
						<div className="flex space-x-4">
							{socialLinks.map((link, index) => {
								const IconComponent = link.icon;
								return (
									<motion.a
										key={index}
										href={link.href}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
										whileHover={{ scale: 1.1, y: -3 }}
										whileTap={{ scale: 0.95 }}
										className={`p-3 bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700 hover:border-slate-600 rounded-xl transition-all duration-300 backdrop-blur-sm ${link.color}`}
										aria-label={link.label}>
										<IconComponent className="w-5 h-5 text-slate-400 hover:text-inherit transition-colors duration-300" />
									</motion.a>
								);
							})}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.8, duration: 0.6 }}
							className="font-semibold text-lg mb-6 text-slate-300">
							Quick Links
						</motion.h3>
						<ul className="space-y-4">
							{quickLinks.map((item, index) => (
								<motion.li
									key={item.name}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: 1.9 + index * 0.1, duration: 0.5 }}>
									<button
										onClick={() => scrollToSection(item.id)}
										className="text-slate-400 hover:text-primary-400 transition-all duration-200 flex items-center gap-2 group">
										<ArrowUp className="w-3 h-3 rotate-45 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
										{item.name}
									</button>
								</motion.li>
							))}
						</ul>
					</div>

					{/* Specialties */}
					<div>
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 2.1, duration: 0.6 }}
							className="font-semibold text-lg mb-6 text-slate-300">
							Specialties
						</motion.h3>
						<ul className="space-y-4">
							{specialties.map((item, index) => (
								<motion.li
									key={item}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
									className="text-slate-400 hover:text-slate-300 transition-colors duration-200 cursor-default">
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
					transition={{ delay: 2.4, duration: 0.6 }}
					className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-slate-500 text-sm">
						© {new Date().getFullYear()} Portfolio. Crafted with precision and
						passion.
					</p>
					<p className="text-slate-500 text-sm flex items-center mt-4 md:mt-0">
						Made with{" "}
						<Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" /> using
						React & TypeScript
					</p>
				</motion.div>
			</motion.div>
		</LampContainer>
	);
};

export default EnhancedLampFooter;
