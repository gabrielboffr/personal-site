import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Tech from "./components/Tech/Tech";

function App() {
  return (
    <div className="min-h-screen bg-gradient-dark px-4 py-4 sm:px-6 md:bg-fixed md:px-8">
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
