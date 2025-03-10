import './Testimonials.css'
import Intro from '../../../components/Intro/Intro'
import Palate from '../../../components/Palate/Palate'
import daisy from "../../../images/Mitchel.jpg";
import pascal from "../../../images/Pascal.jpg";
import jake from "../../../images/Jake.jpg";

function Testimonials() {
  return (
    <>
      <div className="testimonials-section">
        <div className="testimonials-intro">
            <Intro title="Testimonials" text="What our Tourists Say"/>
        </div>
        <div className="testimonials-paragragh">
        <p className="paragragh-content">We are pleased to announce that after 10 years filled with experience, we have become the global leader <br />and are passionate about discovering the finest things.
        </p>
        </div>
        <div className="testimonials-container">
            <Palate img={daisy} name={"Daisy Debroux"} description={"Tourist"}comments={"Anyone who enjoys exploring new trails for hiking should utilize this for additional inspiration. My friends and I had a great time on the excursions."}/>
            <Palate img={pascal} name={"Niklaus Girard"} description={"Client"}comments={"If you love discovering new hiking trails, you should take advantage of this for extra motivation. My friends and I had an amazing experience on the adventures."}/>
            <Palate img={jake} name={"Mitchel  Gatzambithe"} description={"Customer"}comments={"My friends and I had a fantastic time on our adventures. If you enjoy exploring new hiking paths, you should seize this opportunity for added motivation."}/>
            </div>
        </div>
    </>
  )
}

export default Testimonials
