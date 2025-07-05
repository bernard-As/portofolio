import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import {
	ArrowRight,
	Code,
	Database,
	Brain,
	Cloud,
	Shield,
	Server,
} from "lucide-react";

const ContainerScrollDemo: React.FC = () => {
	return (
		<ContainerScroll
			titleComponent={
				<div className="space-y-6">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent leading-tight">
						Building the Future with
						<br />
						<span className="text-primary-600 dark:text-primary-400">
							Backend Excellence
						</span>
					</h1>
					<p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
						Fullstack developer specializing in robust backend systems, AI
						integration, and cloud infrastructure
					</p>
					<div className="flex flex-wrap justify-center gap-3 mt-8">
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
									className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
									<IconComponent className="w-4 h-4 text-primary-600 dark:text-primary-400" />
									<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
										{tech.label}
									</span>
								</div>
							);
						})}
					</div>
				</div>
			}>
			<div className="mx-auto rounded-2xl object-cover h-full object-left-top relative">
				{/* Portfolio Preview Content */}
				<div className="h-full w-full bg-gradient-to-br from-violet-400 via-purple-400 to-blue-400 dark:from-violet-600 dark:via-purple-600 dark:to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
					{/* Background Pattern */}
					<div className="absolute inset-0 opacity-20">
						<div className="absolute inset-0 bg-dots-pattern"></div>
					</div>

					{/* Content */}
					<div className="text-center z-10 p-8">
						<div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
							<Code className="w-10 h-10 text-white" />
						</div>
						<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
							Modern Portfolio
						</h3>
						<p className="text-white/80 mb-6 max-w-md mx-auto">
							Interactive showcase of backend expertise, AI projects, and cloud
							solutions
						</p>
						<button className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full font-medium transition-all duration-200">
							Explore Projects
							<ArrowRight className="w-4 h-4" />
						</button>
					</div>

					{/* Floating Elements */}
					<div className="absolute top-8 left-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
						<Database className="w-6 h-6 text-white/80" />
					</div>
					<div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
						<Brain className="w-6 h-6 text-white/80" />
					</div>
					<div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
						<Cloud className="w-6 h-6 text-white/80" />
					</div>
					<div className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
						<Shield className="w-6 h-6 text-white/80" />
					</div>
				</div>
			</div>
		</ContainerScroll>
	);
};

export default ContainerScrollDemo;
