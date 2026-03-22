import About from "./components/About/About";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Tech from "./components/Tech/Tech";

function App() {
  return (
    <div className="bg-gradient-dark h-full bg-fixed py-4 px-8">
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Tech />
      <Footer />
    </div>
  );
}

export default App;
