import { motion } from "framer-motion";
import {
	ArrowRight,
	Code,
	Database,
	Brain,
	Cloud,
	Shield,
	Server,
	Download,
} from "lucide-react";
import { cn } from "../lib/utils";

export const SpotlightHero = () => {
	return (
		<div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			<div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center">
					{/* Status badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mb-8">
						<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
							<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
							Available for new projects
						</span>
					</motion.div>

					{/* Main heading */}
					<h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-8">
						Building Scalable <br />
						<TextGenerateEffect words="Backend Solutions" />
					</h1>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="text-neutral-300 max-w-lg mx-auto my-8 text-sm relative z-10">
						Expert fullstack developer specializing in robust backend
						architectures, AI integration, cloud infrastructure, and
						enterprise-grade security solutions.
					</motion.p>

					{/* Stats */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="flex flex-wrap justify-center gap-8 mb-12">
						{[
							{ value: "5+", label: "Years Experience" },
							{ value: "50+", label: "Projects Completed" },
							{ value: "99%", label: "Client Satisfaction" },
							{ value: "24/7", label: "Support Available" },
						].map((stat, index) => (
							<div
								key={index}
								className="text-center">
								<div className="text-2xl md:text-3xl font-bold text-white mb-1">
									{stat.value}
								</div>
								<div className="text-sm text-neutral-400">{stat.label}</div>
							</div>
						))}
					</motion.div>

					{/* Action buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							onClick={() => {
								const element = document.getElementById("projects");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
							className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-medium transition-all duration-300 hover:bg-neutral-100">
							View Portfolio
							<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
						</motion.button>

						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-neutral-700 text-neutral-300 rounded-lg font-medium transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-600">
							<Download className="w-4 h-4" />
							Download CV
						</motion.button>
					</motion.div>

					{/* Tech stack */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.7 }}
						className="mb-8">
						<p className="text-neutral-400 text-sm mb-4">
							Technologies I work with
						</p>
						<div className="flex flex-wrap justify-center gap-3">
							{[
								{ icon: Server, label: "Node.js" },
								{ icon: Database, label: "PostgreSQL" },
								{ icon: Brain, label: "Python" },
								{ icon: Cloud, label: "AWS" },
								{ icon: Shield, label: "Security" },
								{ icon: Code, label: "TypeScript" },
							].map((tech, index) => {
								const IconComponent = tech.icon;
								return (
									<motion.div
										key={index}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
										whileHover={{ scale: 1.05, y: -2 }}
										className="flex items-center gap-2 px-3 py-2 bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-300 text-sm hover:border-neutral-600 transition-all duration-300">
										<IconComponent className="w-4 h-4" />
										<span>{tech.label}</span>
									</motion.div>
								);
							})}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

const Spotlight = ({
	className,
	fill,
}: {
	className?: string;
	fill?: string;
}) => {
	return (
		<svg
			className={cn(
				"animate-pulse duration-2000 absolute z-0 pointer-events-none opacity-0 animate-fade-in",
				className
			)}
			width="169"
			height="355"
			viewBox="0 0 169 355"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_f_1065_8)">
				<ellipse
					cx="84.5"
					cy="177.5"
					rx="44.5"
					ry="167.5"
					fill={fill || "white"}
					fillOpacity="0.06"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_1065_8"
					x="0"
					y="0"
					width="169"
					height="355"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB">
					<feFlood
						floodOpacity="0"
						result="BackgroundImageFix"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="20"
						result="effect1_foregroundBlur_1065_8"
					/>
				</filter>
			</defs>
		</svg>
	);
};

const TextGenerateEffect = ({ words }: { words: string }) => {
	const wordsArray = words.split(" ");

	return (
		<div className="inline">
			{wordsArray.map((word, idx) => (
				<motion.span
					key={word + idx}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.25,
						delay: idx * 0.1 + 0.8,
					}}
					className="text-white">
					{word}{" "}
				</motion.span>
			))}
		</div>
	);
};

export default SpotlightHero;
