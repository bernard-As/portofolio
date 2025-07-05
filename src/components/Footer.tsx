import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
	const socialLinks = [
		{ icon: Github, href: "#", label: "GitHub" },
		{ icon: Linkedin, href: "#", label: "LinkedIn" },
		{ icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
	];

	return (
		<footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-4 gap-8">
						{/* Brand */}
						<div className="md:col-span-2">
							<div className="flex items-center mb-4">
								<div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
									<span className="text-white font-bold text-sm">P</span>
								</div>
								<span className="ml-2 text-xl font-bold">Portfolio</span>
							</div>
							<p className="text-gray-400 mb-6 max-w-md">
								Fullstack developer specializing in backend systems, AI
								integration, and cloud infrastructure. Let's build something
								amazing together.
							</p>
							<div className="flex space-x-4">
								{socialLinks.map((link, index) => {
									const IconComponent = link.icon;
									return (
										<a
											key={index}
											href={link.href}
											className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
											aria-label={link.label}>
											<IconComponent className="w-5 h-5" />
										</a>
									);
								})}
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className="font-semibold text-lg mb-4">Quick Links</h3>
							<ul className="space-y-2">
								{["About", "Skills", "Projects", "Contact"].map((item) => (
									<li key={item}>
										<button
											onClick={() => {
												const element = document.getElementById(
													item.toLowerCase()
												);
												if (element)
													element.scrollIntoView({ behavior: "smooth" });
											}}
											className="text-gray-400 hover:text-white transition-colors duration-200">
											{item}
										</button>
									</li>
								))}
							</ul>
						</div>

						{/* Specialties */}
						<div>
							<h3 className="font-semibold text-lg mb-4">Specialties</h3>
							<ul className="space-y-2 text-gray-400">
								<li>Backend APIs</li>
								<li>AI Integration</li>
								<li>Cloud Infrastructure</li>
								<li>Database Design</li>
							</ul>
						</div>
					</div>

					{/* Bottom bar */}
					<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm">
							© {new Date().getFullYear()} Portfolio. All rights reserved.
						</p>
						<p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
							Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using
							React & TypeScript
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
