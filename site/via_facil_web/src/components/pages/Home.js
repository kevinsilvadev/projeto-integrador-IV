import HeroSection from "../heroSection";
import NavBar from "../navBar";
import Parcerias from "../parcerias";
import Vantagens from "../vantagens";


function Home() {
  return (
    <>
      <NavBar/>
      <HeroSection />
      <Vantagens/>
      <Parcerias/>
    </>
  );
}

export default Home;
