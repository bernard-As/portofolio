import { motion } from "framer-motion";
import {
	ArrowRight,
	Database,
	Brain,
	Cloud,
	Shield,
	Server,
	Globe,
	Star,
} from "lucide-react";

export const FloatingCardsHero = () => {
	return (
		<div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
			</div>

			{/* Floating background elements */}
			<FloatingElements />

			{/* Main content */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8">
						<Star className="w-4 h-4" />
						Featured Developer
					</motion.div>

					{/* Main Title */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 mb-6">
						Crafting Digital
						<br />
						<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							Experiences
						</span>
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
						Full-stack developer passionate about building scalable backend
						systems, integrating AI solutions, and creating secure cloud
						infrastructures.
					</motion.p>

					{/* Action Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => {
								const element = document.getElementById("projects");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
							className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold transition-all duration-300 hover:from-purple-600 hover:to-pink-600">
							<span className="flex items-center gap-2">
								Explore My Work
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
							</span>
						</motion.button>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => {
								const element = document.getElementById("contact");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
							className="px-8 py-4 border border-purple-400/50 text-purple-300 rounded-full font-semibold transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-400">
							Let's Connect
						</motion.button>
					</motion.div>

					{/* Floating Tech Cards */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
						{[
							{
								icon: Server,
								label: "Backend",
								color: "from-blue-400 to-blue-600",
							},
							{
								icon: Brain,
								label: "AI/ML",
								color: "from-purple-400 to-purple-600",
							},
							{
								icon: Database,
								label: "Database",
								color: "from-green-400 to-green-600",
							},
							{
								icon: Cloud,
								label: "Cloud",
								color: "from-cyan-400 to-cyan-600",
							},
							{
								icon: Shield,
								label: "Security",
								color: "from-red-400 to-red-600",
							},
							{
								icon: Globe,
								label: "Web",
								color: "from-orange-400 to-orange-600",
							},
						].map((tech, index) => {
							const IconComponent = tech.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20, rotateY: -30 }}
									animate={{ opacity: 1, y: 0, rotateY: 0 }}
									transition={{
										duration: 0.6,
										delay: 0.8 + index * 0.1,
										type: "spring",
										stiffness: 100,
									}}
									whileHover={{
										y: -10,
										rotateY: 10,
										scale: 1.05,
										transition: { duration: 0.2 },
									}}
									className="group relative">
									<div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
										<div
											className={`w-8 h-8 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-3 mx-auto`}>
											<IconComponent className="w-4 h-4 text-white" />
										</div>
										<p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
											{tech.label}
										</p>

										{/* Floating glow effect */}
										<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
									</div>
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom gradient */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
		</div>
	);
};

const FloatingElements = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{/* Animated orbs */}
			<motion.div
				animate={{
					x: [0, 100, 0],
					y: [0, -100, 0],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "linear",
				}}
				className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60"
			/>
			<motion.div
				animate={{
					x: [0, -80, 0],
					y: [0, 120, 0],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: "linear",
				}}
				className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full opacity-40"
			/>
			<motion.div
				animate={{
					x: [0, 60, 0],
					y: [0, -80, 0],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: "linear",
				}}
				className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-30"
			/>

			{/* Code symbols */}
			<motion.div
				animate={{
					opacity: [0.2, 0.8, 0.2],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute top-1/5 right-1/5 text-purple-300 text-6xl font-mono opacity-10 select-none">
				{"{}"}
			</motion.div>
			<motion.div
				animate={{
					opacity: [0.1, 0.6, 0.1],
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute bottom-1/5 left-1/6 text-pink-300 text-4xl font-mono opacity-10 select-none">
				{"</>"}
			</motion.div>
		</div>
	);
};

export default FloatingCardsHero;
