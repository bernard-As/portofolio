import React, { useState } from "react";
import {
	Mail,
	Phone,
	MapPin,
	Send,
	CheckCircle,
	AlertCircle,
} from "lucide-react";

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setShowError(false); // Reset error state

		try {
			// Submit to Formspree
			const response = await fetch("https://formspree.io/f/xovwzjvl", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				// Clear the form
				setFormData({
					name: "",
					email: "",
					subject: "",
					message: "",
				});

				// Show success message
				setShowSuccess(true);

				// Hide success message after 5 seconds
				setTimeout(() => {
					setShowSuccess(false);
				}, 5000);
			} else {
				throw new Error("Failed to send message");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			setShowError(true);

			// Hide error message after 5 seconds
			setTimeout(() => {
				setShowError(false);
			}, 5000);
		} finally {
			setIsSubmitting(false);
		}
	};

	const contactInfo = [
		{
			icon: Mail,
			title: "Email",
			value: "montfortassogba2@gmail.com",
			link: "mailto:montfortassogba2@gmail.com",
		},
		{
			icon: Phone,
			title: "Phone",
			value: "+229 01 44 04 76 47",
			link: "tel:+22944047647",
		},
		{
			icon: MapPin,
			title: "Location",
			value: "Girne, Cyprus",
			link: "#",
		},
	];

	return (
		<section
			id="contact"
			className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Get In Touch
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
							Ready to discuss your next project? Let's work together to create
							something amazing.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
									Let's Start a Conversation
								</h3>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
									Whether you need a robust backend system, AI integration, or
									cloud infrastructure optimization, I'm here to help bring your
									vision to life.
								</p>
							</div>

							{/* Contact Info Cards */}
							<div className="space-y-4">
								{contactInfo.map((info, index) => {
									const IconComponent = info.icon;
									return (
										<a
											key={index}
											href={info.link}
											className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
											<div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
												<IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
											</div>
											<div>
												<h4 className="font-semibold text-gray-900 dark:text-white">
													{info.title}
												</h4>
												<p className="text-gray-600 dark:text-gray-300">
													{info.value}
												</p>
											</div>
										</a>
									);
								})}
							</div>
						</div>

						{/* Contact Form */}
						<div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
								Send a Message
							</h3>

							<form
								onSubmit={handleSubmit}
								className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
											placeholder="Your full name"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Email *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
											placeholder="your.email@example.com"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Subject *
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
										placeholder="What's this about?"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Message *
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={6}
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-vertical"
										placeholder="Tell me about your project..."
									/>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
									{isSubmitting ? (
										<>
											<div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
											Sending...
										</>
									) : (
										<>
											<Send className="w-5 h-5 mr-2" />
											Send Message
										</>
									)}
								</button>
							</form>

							{/* Success Message */}
							{showSuccess && (
								<div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-in fade-in duration-300">
									<div className="flex items-center">
										<CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
										<div>
											<h4 className="text-green-800 dark:text-green-300 font-semibold">
												Thank you for your message!
											</h4>
											<p className="text-green-700 dark:text-green-400 text-sm mt-1">
												Your message has been sent successfully. I'll get back
												to you as soon as possible.
											</p>
										</div>
									</div>
								</div>
							)}

							{/* Error Message */}
							{showError && (
								<div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-in fade-in duration-300">
									<div className="flex items-center">
										<AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3" />
										<div>
											<h4 className="text-red-800 dark:text-red-300 font-semibold">
												Failed to send message
											</h4>
											<p className="text-red-700 dark:text-red-400 text-sm mt-1">
												There was an error sending your message. Please try
												again or contact me directly.
											</p>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
