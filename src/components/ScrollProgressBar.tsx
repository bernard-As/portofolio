import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollProgressBar: React.FC = () => {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const updateScrollProgress = () => {
			const scrolled = window.pageYOffset;
			const maxHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = (scrolled / maxHeight) * 100;
			setScrollProgress(progress);
		};

		window.addEventListener("scroll", updateScrollProgress);
		updateScrollProgress(); // Initial call

		return () => window.removeEventListener("scroll", updateScrollProgress);
	}, []);

	return (
		<motion.div
			className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200/20 dark:bg-gray-800/20"
			initial={{ opacity: 0 }}
			animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
			transition={{ duration: 0.3 }}>
			<motion.div
				className="h-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 shadow-lg"
				style={{
					width: `${scrollProgress}%`,
					boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
				}}
				initial={{ width: 0 }}
				animate={{ width: `${scrollProgress}%` }}
				transition={{ duration: 0.1, ease: "easeOut" }}
			/>

			{/* Glowing effect */}
			<motion.div
				className="absolute top-0 right-0 h-full w-4 bg-gradient-to-l from-primary-400/50 to-transparent"
				style={{
					transform: `translateX(${scrollProgress < 100 ? 0 : -100}%)`,
				}}
				animate={{
					opacity: scrollProgress > 5 ? [0.5, 1, 0.5] : 0,
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
		</motion.div>
	);
};

export default ScrollProgressBar;
