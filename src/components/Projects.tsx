import React from "react";
import {
	ExternalLink,
	Github,
	Calendar,
	Code,
	MessageCircle,
	Brain,
	Cloud,
	Lock,
	TestTube,
} from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const Projects: React.FC = () => {
	// Function to create custom GlowingEffect with vibrant project-specific colors
	const createCustomGlowingEffect = (icon: React.ComponentType) => {
		let spread = 40; // Default spread for more glow
		let borderWidth = 3; // Thicker border for more prominence
		let blur = 2; // Added slight blur for softer glow
		let glowClass = "enhanced-glow";
		const variant = "default" as const;

		// Project-specific customizations
		if (icon === MessageCircle) {
			spread = 48; // Chat bot gets conversational, interactive glow
			borderWidth = 3;
			blur = 2;
			glowClass = "enhanced-glow chatbot-glow";
		} else if (icon === Brain) {
			spread = 50; // AI projects get dramatic, intelligent glow
			borderWidth = 4;
			blur = 3;
			glowClass = "enhanced-glow ai-glow";
		} else if (icon === Code) {
			spread = 46; // CodeNest gets dynamic, developer glow
			borderWidth = 3;
			blur = 2;
			glowClass = "enhanced-glow code-glow";
		} else if (icon === Cloud) {
			spread = 45; // Cloud projects get wide, expansive glow
			borderWidth = 3;
			blur = 2;
			glowClass = "enhanced-glow cloud-glow";
		} else if (icon === Calendar) {
			spread = 42; // University system gets organized, academic glow
			borderWidth = 3;
			blur = 2;
			glowClass = "enhanced-glow academic-glow";
		}

		return (
			<GlowingEffect
				disabled={false}
				glow={true}
				proximity={120} // Increased proximity for earlier activation
				spread={spread}
				blur={blur}
				movementDuration={1.2} // Slightly faster for more responsive feel
				borderWidth={borderWidth}
				variant={variant}
				className={glowClass}
			/>
		);
	};

	const projects = [
		{
			title: "RDU Chat Bot - University Assistant",
			description:
				"A conversational AI assistant built for RDU University students and staff. Uses Google AI Studio for natural language processing to answer questions about courses, campus facilities, and administrative procedures. Built as a learning project to explore AI integration in educational settings.",
			technologies: [
				"React",
				"Vite.js",
				"TypeScript",
				"Python",
				"Django DRF",
				"Google AI Studio",
				"PostgreSQL",
				"Redis",
				"WebSockets",
				"Docker",
				"Daphne",
			],
			icon: MessageCircle,
			github: "https://github.com/bernard-As/RDUChatBot",
			demo: "https://rdu-chat-bot-9xyn.vercel.app",
			status: "live",
		},
		{
			title: "AI Model Quantization Platform",
			description:
				"Currently developing a platform for optimizing machine learning models through quantization techniques. Focuses on reducing model size while maintaining accuracy for edge deployment. Features automated quantization pipelines, performance benchmarking, and model compression analytics. In private development with plans for academic publication.",
			technologies: [
				"Python",
				"TensorFlow",
				"PyTorch",
				"Google Cloud Platform",
				"TensorFlow Lite",
				"ONNX",
				"Docker",
				"FastAPI",
				"React",
			],
			icon: Brain,
			github: "Private Repository",
			demo: "In Development",
			status: "private",
		},
		{
			title: "CodeNest - Developer Project Hub",
			description:
				"A portfolio platform for developers to showcase their projects. Features project storage, basic analytics, and developer profiles. Built to learn Angular and explore project management concepts. Includes user authentication, project CRUD operations, and responsive design.",
			technologies: [
				"Angular",
				"Tailwind CSS",
				"TypeScript",
				"PostgreSQL",
				"Prisma",
				"Redis",
				"Docker",
			],
			icon: Code,
			github: "https://github.com/bernard-As/codenest_v2",
			demo: "https://codenest-v2-123q.vercel.app/",
			status: "live",
		},
		{
			title: "Intelligent Cloud Resource Optimizer",
			description:
				"Machine learning-powered system for optimizing Google Cloud resource allocation and cost management. Uses predictive analytics to forecast usage patterns and automatically adjust compute resources. Currently in beta testing with real workloads. Implements custom ML models for workload prediction and automated scaling decisions.",
			technologies: [
				"Python",
				"Google Cloud Platform",
				"TensorFlow",
				"Kubernetes",
				"Cloud Functions",
				"BigQuery",
				"Monitoring API",
				"Terraform",
			],
			icon: Cloud,
			github: "Private Repository",
			demo: "Beta Testing",
			status: "private",
		},
		{
			title: "University Timetable Management System",
			description:
				"A timetable management system designed for RDU University's Computer Engineering department. Helps students and faculty manage course schedules, room bookings, and class conflicts. Features real-time updates and conflict detection algorithms.",
			technologies: [
				"React",
				"Vite.js",
				"TypeScript",
				"PostgreSQL",
				"Socket.io",
				"Redis",
				"Python",
				"Django DRF",
				"Ant Design",
			],
			icon: Calendar,
			github: "https://github.com/bernard-As/timetable",
			demo: "https://timetable.rdu.edu.tr",
			status: "live",
		},
	];

	return (
		<section
			id="projects"
			className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							My Projects
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
							A mix of deployed applications and cutting-edge projects in
							development, showcasing my journey in full-stack development,
							AI/ML, and cloud technologies
						</p>
					</div>

					{/* Projects Grid */}
					<div className="grid lg:grid-cols-2 gap-8">
						{projects.map((project, index) => {
							const IconComponent = project.icon;

							// Get project-specific styling
							let cardGlowClass = "";
							if (IconComponent === MessageCircle) {
								cardGlowClass = "hover:shadow-indigo-500/20";
							} else if (IconComponent === Brain) {
								cardGlowClass = "hover:shadow-pink-500/20";
							} else if (IconComponent === Code) {
								cardGlowClass = "hover:shadow-cyan-500/20";
							} else if (IconComponent === Cloud) {
								cardGlowClass = "hover:shadow-green-500/20";
							} else if (IconComponent === Calendar) {
								cardGlowClass = "hover:shadow-purple-500/20";
							}

							return (
								<div
									key={index}
									className={`enhanced-glow-card relative bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 group hover:scale-[1.03] transform overflow-hidden ${cardGlowClass}`}>
									{/* Glowing Effect */}
									{createCustomGlowingEffect(IconComponent)}{" "}
									{/* Project Header */}
									<div className="flex items-start justify-between mb-4 relative z-10">
										<div className="flex items-center">
											<div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4 transition-all duration-300 group-hover:scale-110">
												<IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
											</div>
											<div>
												<h3 className="text-xl font-bold text-gray-900 dark:text-white">
													{project.title}
												</h3>
												{/* Status Badge */}
												{project.status === "private" && (
													<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 mt-1">
														<Lock className="w-3 h-3 mr-1" />
														In Development
													</span>
												)}
												{project.status === "live" && (
													<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 mt-1">
														Live
													</span>
												)}
											</div>
										</div>
										<div className="flex space-x-2">
											{project.status === "live" ? (
												<>
													<a
														href={project.github}
														target="_blank"
														className="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-all duration-200 hover:scale-110"
														title="View Source">
														<Github className="w-5 h-5" />
													</a>
													<a
														href={project.demo}
														target="_blank"
														className="p-2 text-gray-400 hover:text-primary-600 dark:text-gray-500 dark:hover:text-primary-400 transition-all duration-200 hover:scale-110"
														title="Live Demo">
														<ExternalLink className="w-5 h-5" />
													</a>
												</>
											) : (
												<>
													<div
														className="p-2 text-gray-300 dark:text-gray-600 cursor-not-allowed"
														title="Private Repository">
														<Github className="w-5 h-5" />
													</div>
													<div
														className="p-2 text-gray-300 dark:text-gray-600 cursor-not-allowed"
														title="In Development">
														<TestTube className="w-5 h-5" />
													</div>
												</>
											)}
										</div>
									</div>
									{/* Description */}
									<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
										{project.description}
									</p>
									{/* Technologies */}
									<div className="flex flex-wrap gap-2 relative z-10">
										{project.technologies.map((tech, techIndex) => (
											<span
												key={techIndex}
												className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-500">
												{tech}
											</span>
										))}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
