import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-gradient-dark h-full bg-fixed py-4 px-8">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
