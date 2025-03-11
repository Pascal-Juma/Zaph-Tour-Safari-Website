import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import About from "../../pages/Home/About/About";
import Newsletter from "../../pages/Home/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="aboutus-headings">
        <Header />
        <div className="aboutus-intro">
          <Intro
            title="Zaph Tours"
            text="Best Safari and Adventure"
            color="white"
          />
        </div>
      </div>
      <About />
      <Newsletter />
      <Footer />
    </>
  );
}

export default AboutUs;
