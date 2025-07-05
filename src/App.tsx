import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import HeroHighlight from "./components/HeroHighlight";
// import SpotlightHero from "./components/SpotlightHero"; // Alternative hero option
// import FloatingCardsHero from "./components/FloatingCardsHero"; // Alternative hero option
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LampFooter from "./components/LampFooter";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgressBar from "./components/ScrollProgressBar";
// import QuickNavigation from "./components/QuickNavigation"; // Alternative with section nav

function App() {
	return (
		<ThemeProvider>
			<div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
				<ScrollProgressBar />
				<Header />
				<main className="pt-16 md:pt-20">
					<div className="px-4 sm:px-6 md:px-8 lg:px-12">
						<HeroHighlight />
					</div>
					<div className="px-4 sm:px-6 md:px-8 lg:px-12 space-y-8 md:space-y-16">
						<About />
						<Skills />
						<Projects />
						<Contact />
					</div>
				</main>
				<LampFooter />
				<ScrollToTop />
				{/* Alternative: <QuickNavigation /> for section navigation */}
			</div>
		</ThemeProvider>
	);
}

export default App;
