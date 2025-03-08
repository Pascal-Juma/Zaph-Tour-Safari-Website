import "./About.css";
import Headings from "./Headings";
import Button from "../../components/Button/Button";
import aboutLeft from "../../images/about-left.jpg";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-left">
        <Headings />
        <div className="about-description">
            <p className="about-paragraph">
            At Push, we craft stories of luxury and affordability, creating memorable experiences around the world. Our mission to transform luxury travel stems from a commitment to offering refined escapes that are accessible to everyone.
            </p>
        </div>
        <div className="stats">
            <div className="stats-left">
                <p className="stats-title">10 K</p>
                <p className="stats-description">successful journeys</p>
            </div>
            <div className="stats-right">
                <p className="stats-title">200 K</p>
                <p className="stats-description">Satsified Customers</p>
            </div>
        </div>
        <Button btn="Explore More" />
        </div>
        <div className="about-right">
        <div className="about-image">
            <div  className="image-right">
                <img src={aboutLeft} alt="about right" />
            </div>
            <div  className="image-left">
                <img src={aboutLeft} alt="about left" />
            </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default About;
