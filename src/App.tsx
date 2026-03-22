import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-dark py-4 px-4 sm:px-6 md:bg-fixed md:px-8">
      <Navbar />
      <Home />
      <About />
      <Experience />
    </div>
  );
}

export default App;
