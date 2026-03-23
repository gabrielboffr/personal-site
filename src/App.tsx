import { Suspense, lazy } from "react";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const About = lazy(() => import("./components/About/About"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Tech = lazy(() => import("./components/Tech/Tech"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const SectionFallback = () => (
  <section className="mx-auto mt-8 h-24 w-full max-w-7xl animate-pulse rounded-2xl border border-white/8 bg-white/3" />
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-dark px-4 py-4 sm:px-6 md:bg-fixed md:px-8">
      <Analytics />
      <SpeedInsights />
      <CustomCursor />
      <Navbar />
      <Home />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Experience />
        <Tech />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
