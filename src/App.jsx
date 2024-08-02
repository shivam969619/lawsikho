import Navbar from "./components/Navbar";
import icon from "./assets/logo.png";
import Hero from "./components/Hero";
import HeroCarousels from "./components/HeroCarousels";
import LawSikho from "./components/LawSikho";
function App() {
  return (
    <>
      <div className="bg-appbg">
        <Navbar />
        <Hero />
        <HeroCarousels />
        {/* <LawSikho /> */}
      </div>
    </>
  );
}

export default App;
