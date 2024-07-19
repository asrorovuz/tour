import { useEffect, useState } from "react";
import About from "./about/about";
import BestLocation from "./best-location/best-location";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import Home from "./home/home";
import Navbar from "./navbar/navbar";
import Reservation from "./reservation/reservation";
import SupportVisa from "./support-visa/support-visa";
import Tours from "./tours/tours";
import loadingImg from "../assets/loading.svg";
import ContactForm from "./myform/form";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, [])

  return (
    <>
      {loading ? (
        <>
          {/* {alertLoading && }
           */}
           {/* <Alert content={content} test={test} /> */}
          <header className="relative min-h-[70px]">
            <Navbar />
          </header>
          <main>
            <Home />
            <Tours />
            <SupportVisa />
            <About />
            <BestLocation />
            <Reservation />
            <Contact/>
            <ContactForm/>
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      ) : (
        <div className="w-full h-[100vh]">
          <img className="w-full h-full" src={loadingImg} alt="loading" />
        </div>
      )}
    </>
  );
}

export default App;
