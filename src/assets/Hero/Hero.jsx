import { MdOutlineHorizontalRule } from "react-icons/md";
import './Hero.css';
import Button from '../components/Button/Button';
import Logo from '../components/Logo/Logo';

function Hero() {
  return (
    <>
        <div className="hero-content">
            <div className="hero-details">
                <p className="hero-tagline-first"><span className="line"><MdOutlineHorizontalRule/></span>Its Time to</p>
                <h1 className="hero-tagline-second">Explore</h1>
                <p className="hero-tagline-third">Best Safaris and Adventures!</p>
                <div className="hero-btn">
                    <Button btn="Book Now" />
                </div>
            </div>
            <div className="hero-discounts">
                <Logo />
                <p className="discounts-title">March Month Discount</p>
                <p className="discounts-description">Quis ipsum suspendisse ultrices gravida. Risus <br></br>.commodo viverra maecenas</p>
                <ol className="discounts-list">
                    <li>Special Discounts</li>
                    <li>Beautiful</li>
                    <li>For the entire Family</li>
                </ol>
            </div>            
        </div>
    </>
  )
}

export default Hero
