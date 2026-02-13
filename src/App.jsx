import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home";
import Aboutme from "./Components/Aboutme";
import Services from "./Components/Services";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Navbar/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
