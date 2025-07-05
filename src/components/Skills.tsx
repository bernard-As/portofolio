import React from "react";
import { Code, Database, Cloud, Shield, Brain, Server } from "lucide-react";

const Skills: React.FC = () => {
	const skillCategories = [
		{
			title: "Backend Development",
			icon: Server,
			skills: [
				"Node.js",
				"Python",
				"PHP (Laravel)",
				"Java",
				"TypeScript",
				"REST APIs",
			],
		},
		{
			title: "Databases",
			icon: Database,
			skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
		},
		{
			title: "Cloud & DevOps",
			icon: Cloud,
			skills: [
				"AWS",
				"Google Cloud",
				"Docker",
				"Kubernetes",
				"Oracle Cloud",
				"CI/CD",
			],
		},
		{
			title: "AI & Machine Learning",
			icon: Brain,
			skills: ["TensorFlow", "PyTorch", "FastAPI", "Model Deployment", "ONNX", "Scikit-Learn", "Llama.cpp", "Ollama", "Hugging Face", "AI Studio"],
		},
		{
			title: "Security",
			icon: Shield,
			skills: [
				"OAuth",
				"JWT",
				"Security Auditing",
				"Vulnerability Assessment",
				"OWASP",
			],
		},
		{
			title: "Frontend",
			icon: Code,
			skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"],
		},
	];

	return (
		<section
			id="skills"
			className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Skills & Technologies
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
							A comprehensive toolkit for building modern, scalable applications
						</p>
					</div>

					{/* Skills Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{skillCategories.map((category, index) => {
							const IconComponent = category.icon;
							return (
								<div
									key={index}
									className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
									{/* Category Header */}
									<div className="flex items-center mb-4">
										<div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
											<IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
										</div>
										<h3 className="text-xl font-bold text-gray-900 dark:text-white">
											{category.title}
										</h3>
									</div>

									{/* Skills List */}
									<div className="flex flex-wrap gap-2">
										{category.skills.map((skill, skillIndex) => (
											<span
												key={skillIndex}
												className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-400 transition-colors duration-200">
												{skill}
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

export default Skills;
