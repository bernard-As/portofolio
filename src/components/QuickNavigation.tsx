import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Home, User, Code, Briefcase, Mail } from "lucide-react";

const QuickNavigation: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [showNav, setShowNav] = useState(false);

	// Show button when page is scrolled down
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	// Navigation items
	const navItems = [
		{ id: "hero", label: "Home", icon: Home },
		{ id: "about", label: "About", icon: User },
		{ id: "skills", label: "Skills", icon: Code },
		{ id: "projects", label: "Projects", icon: Briefcase },
		{ id: "contact", label: "Contact", icon: Mail },
	];

	// Scroll to section
	const scrollToSection = (sectionId: string) => {
		if (sectionId === "hero") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
		setShowNav(false);
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<div className="fixed bottom-8 right-8 z-50">
					{/* Navigation menu */}
					<AnimatePresence>
						{showNav && (
							<motion.div
								initial={{ opacity: 0, y: 20, scale: 0.9 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: 20, scale: 0.9 }}
								className="mb-4 flex flex-col gap-2">
								{navItems
									.slice()
									.reverse()
									.map((item, index) => {
										const IconComponent = item.icon;
										return (
											<motion.button
												key={item.id}
												initial={{ opacity: 0, x: 50 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: 50 }}
												transition={{ delay: index * 0.05 }}
												whileHover={{ scale: 1.1, x: -5 }}
												whileTap={{ scale: 0.95 }}
												onClick={() => scrollToSection(item.id)}
												className="group flex items-center gap-3 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
												<IconComponent className="w-4 h-4" />
												<span className="text-sm font-medium whitespace-nowrap">
													{item.label}
												</span>
											</motion.button>
										);
									})}
							</motion.div>
						)}
					</AnimatePresence>

					{/* Main scroll to top button */}
					<motion.button
						initial={{ opacity: 0, scale: 0.5, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.5, y: 20 }}
						whileHover={{
							scale: 1.1,
							boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
						}}
						whileTap={{ scale: 0.9 }}
						onMouseEnter={() => setShowNav(true)}
						onMouseLeave={() => setShowNav(false)}
						onClick={() => scrollToSection("hero")}
						className="relative p-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
						aria-label="Scroll to top">
						{/* Animated background glow */}
						<div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" />

						{/* Arrow icon */}
						<motion.div
							animate={{ y: [0, -2, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="relative z-10">
							<ArrowUp className="w-6 h-6" />
						</motion.div>

						{/* Ripple effect on click */}
						<motion.div
							className="absolute inset-0 rounded-full border-2 border-white/30"
							initial={{ scale: 1, opacity: 1 }}
							whileTap={{
								scale: 1.5,
								opacity: 0,
								transition: { duration: 0.3 },
							}}
						/>

						{/* Hover indicator */}
						<motion.div
							className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white/50 rounded-full"
							initial={{ opacity: 0, scaleY: 0 }}
							animate={{
								opacity: showNav ? 1 : 0,
								scaleY: showNav ? 1 : 0,
							}}
							transition={{ duration: 0.2 }}
						/>
					</motion.button>
				</div>
			)}
		</AnimatePresence>
	);
};

export default QuickNavigation;
