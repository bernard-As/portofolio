import React, { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { isDark, toggleTheme } = useTheme();

	const navItems = [
		{ label: "About", href: "#about" },
		{ label: "Skills", href: "#skills" },
		{ label: "Projects", href: "#projects" },
		{ label: "Contact", href: "#contact" },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center">
						<div className="w-8 h-8 bg-primary-600 dark:bg-primary-500 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-sm">B</span>
						</div>
						<span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
							M. Bernard D. M. Assogba
						</span>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<button
								key={item.label}
								onClick={() => scrollToSection(item.href)}
								className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200">
								{item.label}
							</button>
						))}
					</nav>

					{/* Theme Toggle & Mobile Menu */}
					<div className="flex items-center space-x-4">
						<button
							onClick={toggleTheme}
							className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
							aria-label="Toggle theme">
							{isDark ? (
								<Sun className="w-5 h-5" />
							) : (
								<Moon className="w-5 h-5" />
							)}
						</button>

						{/* Mobile menu button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
							aria-label="Toggle menu">
							{isMenuOpen ? (
								<X className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
						<nav className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<button
									key={item.label}
									onClick={() => scrollToSection(item.href)}
									className="text-left text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200">
									{item.label}
								</button>
							))}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
