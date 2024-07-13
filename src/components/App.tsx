import About from "./about/about";
import Contact from "./contact/contact";
import Home from "./home/home";
import Navbar from "./navbar/navbar";
import SupportVisa from "./support-visa/support-visa";
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
        <SupportVisa/>
        <About />
        <Contact />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
