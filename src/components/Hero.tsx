import React from "react";
import {
	ArrowRight,
	Code,
	Database,
	Brain,
	Cloud,
	Shield,
	Server,
} from "lucide-react";

const Hero: React.FC = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
			<div className="container mx-auto px-6 text-center">
				<div className="max-w-4xl mx-auto">
					{/* Main heading */}
					<h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
						Building the Future with
						<span className="block text-primary-600 dark:text-primary-400">
							Backend Excellence
						</span>
					</h1>

					{/* Subtitle */}
					<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
						Fullstack developer specializing in robust backend systems, AI
						integration, and cloud infrastructure
					</p>

					{/* Tech stack badges */}
					<div className="flex flex-wrap justify-center gap-3 mb-10">
						{[
							{ icon: Server, label: "Backend APIs" },
							{ icon: Brain, label: "AI Integration" },
							{ icon: Database, label: "Database Design" },
							{ icon: Cloud, label: "Cloud Infrastructure" },
							{ icon: Shield, label: "Security First" },
							{ icon: Code, label: "Clean Code" },
						].map((tech, index) => {
							const IconComponent = tech.icon;
							return (
								<div
									key={index}
									className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
									<IconComponent className="w-4 h-4 text-primary-600 dark:text-primary-400" />
									<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
										{tech.label}
									</span>
								</div>
							);
						})}
					</div>

					{/* CTA buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={() => {
								const element = document.getElementById("projects");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
							className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200">
							View Projects
							<ArrowRight className="w-4 h-4" />
						</button>

						<button
							onClick={() => {
								const element = document.getElementById("contact");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
							className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-medium transition-colors duration-200">
							Get In Touch
						</button>
					</div>
				</div>
			</div>

			{/* Background decoration */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 animate-bounce-slow"></div>
				<div
					className="absolute top-40 right-20 w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-bounce-slow"
					style={{ animationDelay: "1s" }}></div>
				<div
					className="absolute bottom-20 left-20 w-12 h-12 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 animate-bounce-slow"
					style={{ animationDelay: "2s" }}></div>
			</div>
		</section>
	);
};

export default Hero;
