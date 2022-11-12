import Footer from "../footer";
import HeroSection from "../heroSection";
import NavBar from "../navBar";
import Parcerias from "../parcerias";
import Vantagens from "../vantagens";


function Home() {

  
  return (
    <>
      <NavBar />
      <HeroSection />
      <Vantagens />
      <div className="parcerias-content">
        <Parcerias />
      </div>
      <Footer />
    </>
  );
}

export default Home;
