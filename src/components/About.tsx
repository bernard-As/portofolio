import React from "react";
import { User, Target, Award } from "lucide-react";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const About: React.FC = () => {
	return (
		<section
			id="about"
			className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
			<div className="container mx-auto px-6">
				<div className="max-w-4xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							About Me
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
							Passionate fullstack developer with a strong focus on backend
							development, AI integration, and cloud infrastructure.
						</p>
					</div>

					{/* Content */}
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* Text Content */}
						<div>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
								With several years of experience in fullstack development, I
								specialize in building robust, scalable backend systems that
								power modern applications. My expertise spans across multiple
								programming languages and frameworks, with a particular passion
								for AI integration and cloud infrastructure.
							</p>
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
								I believe in writing clean, maintainable code and following best
								practices in software architecture. Whether it's designing
								RESTful APIs, implementing microservices, or integrating AI
								models, I approach every project with attention to detail and a
								focus on performance.
							</p>

							{/* Highlights */}
							<div className="grid grid-cols-1 gap-4">
								{[
									{
										icon: User,
										title: "Experience",
										description: "3+ years in fullstack development",
									},
									{
										icon: Target,
										title: "Focus",
										description: "Backend systems & AI integration",
									},
									{
										icon: Award,
										title: "Quality",
										description: "Clean code & best practices",
									},
								].map((item, index) => {
									const IconComponent = item.icon;
									return (
										<div
											key={index}
											className="flex items-start space-x-4">
											<div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
												<IconComponent className="w-5 h-5 text-primary-600 dark:text-primary-400" />
											</div>
											<div>
												<h3 className="font-semibold text-gray-900 dark:text-white">
													{item.title}
												</h3>
												<p className="text-gray-600 dark:text-gray-300">
													{item.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>

						{/* Image/Visual with Direction-Aware Hover */}
						<div className="relative">
							<DirectionAwareHover
								imageUrl={`${import.meta.env.VITE_PORT}/src/assets/me.jpg`}
								className="rounded-xl h-[500px] w-full"
								childrenClassName="bg-black/60 backdrop-blur-sm">
								<div className="text-white">
									<h3 className="text-xl font-bold mb-2">
										Full Stack Developer
									</h3>
									<p className="text-sm opacity-90">
										Backend-focused with expertise in AI, Cloud, and Security
									</p>
									<div className="flex gap-2 mt-3">
										<span className="px-2 py-1 bg-primary-600 rounded text-xs">
											Backend
										</span>
										<span className="px-2 py-1 bg-green-600 rounded text-xs">
											AI
										</span>
										<span className="px-2 py-1 bg-blue-600 rounded text-xs">
											Cloud
										</span>
									</div>
								</div>
							</DirectionAwareHover>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
