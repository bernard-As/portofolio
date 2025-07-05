import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	// Show button when page is scrolled down and calculate progress
	useEffect(() => {
		const toggleVisibility = () => {
			const scrolled = window.pageYOffset;
			const maxHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = (scrolled / maxHeight) * 100;

			setScrollProgress(progress);

			if (scrolled > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	// Scroll to top smoothly
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, scale: 0.5, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.5, y: 20 }}
					className="fixed bottom-8 right-8 z-50">
					<motion.button
						whileHover={{
							scale: 1.1,
							boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
						}}
						whileTap={{ scale: 0.9 }}
						onClick={scrollToTop}
						className="relative p-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
						aria-label="Scroll to top">
						{/* Progress circle */}
						<svg
							className="absolute inset-0 w-full h-full -rotate-90"
							viewBox="0 0 50 50">
							{/* Background circle */}
							<circle
								cx="25"
								cy="25"
								r="20"
								fill="none"
								stroke="rgba(255, 255, 255, 0.2)"
								strokeWidth="2"
							/>
							{/* Progress circle */}
							<motion.circle
								cx="25"
								cy="25"
								r="20"
								fill="none"
								stroke="rgba(255, 255, 255, 0.8)"
								strokeWidth="2"
								strokeLinecap="round"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: scrollProgress / 100 }}
								transition={{ duration: 0.2 }}
								style={{
									strokeDasharray: "125.6", // 2 * π * 20
									strokeDashoffset: 125.6 * (1 - scrollProgress / 100),
								}}
							/>
						</svg>

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
					</motion.button>

					{/* Scroll percentage indicator */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 dark:bg-white/80 text-white dark:text-black text-xs rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						{Math.round(scrollProgress)}%
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;
