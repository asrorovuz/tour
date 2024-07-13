import About from "./about/about";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import Home from "./home/home";
import Navbar from "./navbar/navbar";
import Reservation from "./reservation/reservation";
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
        <Reservation/>
        <Contact />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
