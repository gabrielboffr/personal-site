import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import NotFound from "./components/NotFound/NotFound";

const About = lazy(() => import("./components/About/About"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Tech = lazy(() => import("./components/Tech/Tech"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const SectionFallback = () => (
  <section className="mx-auto mt-8 h-24 w-full max-w-7xl animate-pulse rounded-2xl border border-white/8 bg-white/3" />
);

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = decodeURIComponent(location.hash.slice(1));

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (!target) {
        return false;
      }

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return true;
    };

    if (scrollToTarget()) {
      return;
    }

    const observer = new MutationObserver(() => {
      if (!scrollToTarget()) {
        return;
      }

      observer.disconnect();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const timeoutId = window.setTimeout(() => {
      observer.disconnect();
    }, 5000);

    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.hash, location.pathname]);

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <CustomCursor />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-dark px-4 py-4 sm:px-6 md:bg-fixed md:px-8">
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
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
