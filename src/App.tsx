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
				<main>
					<HeroHighlight />
					<About />
					<Skills />
					<Projects />
					<Contact />
				</main>
				<LampFooter />
				<ScrollToTop />
				{/* Alternative: <QuickNavigation /> for section navigation */}
			</div>
		</ThemeProvider>
	);
}

export default App;
