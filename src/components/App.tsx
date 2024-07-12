import About from "./about/about";
import Contact from "./contact/contact";
import Home from "./home/home";
import Navbar from "./navbar/navbar";
import Tours from "./tours/tours";

function App() {
  return (
    <>
      <header className="relative min-h-[70px]">
        <Navbar />
      </header>
      <main>
        <Home />
        <Tours />
        <About />
        <Contact />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
