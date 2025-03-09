import './Destinations.css'
import Intro from '../../../components/Intro/Intro'
import Card from '../../../components/Card/Card'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import mtKenya from "../../../images/MtKenya.jpg";
import tsavo from "../../../images/Tsavo.jpg";
import ruwenzori from "../../../images/MtRuwenzori.jpg";
import coastal from "../../../images/Coastal.jpg";
import nairobi from "../../../images/Nairobi.jpg";
import lNakuru from "../../../images/LNakuru.jpg";

function Destinations() {
  return (
    <>
      <div className="destinations-section">
        <div className="destinations-intro">
        < Intro title="Modern & Beautiful" text="Our Most Popular Safaris" />
        </div>
        <div className="destinations-cards">
          <Card img={mtKenya} title={"Mt Kenya"} ratings={<FaStar />}ratingsa={<FaStar />}ratingsb={<FaStar />}ratingsc={<FaStar />}ratingsd={<FaStar />} details={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} prices={"From"} payment={" Ksh. 5,000"} price={"per Adult"} link={"Explore Now"}/>
          <Card img={tsavo} title={"Tsavo National Park"} ratings={<FaStar /> }ratingsa={<FaStar />} ratingsb={<FaStar />}ratingsc={<FaStar />}ratingsd={<FaStarHalfStroke />}details={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} prices={"From"} payment={" Ksh. 10,000"} price={"per Adult"} link={"Explore Now"}/>
          <Card img={ruwenzori} title={"Mt Ruwenzori"} ratings={<FaStar /> } ratingsa={<FaStar />} ratingsb={<FaStar />}ratingsc={<FaStar />}ratingsd={<FaStar />}details={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} prices={"From"} payment={" Ksh. 15,000"} price={"per Adult"} link={"Explore Now"}/>
          <Card img={coastal} title={"Coastal Kenya"} ratings={<FaStar />} ratingsa={<FaStar />} ratingsb={<FaStar />}ratingsc={<FaStar />}ratingsd={<FaStar />}details={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} prices={"From"} payment={" Ksh. 50,000"} price={"per Adult"} link={"Explore Now"}/>
          <Card img={nairobi} title={"Nairobi National Park"} ratings={<FaStar /> } ratingsa={<FaStar />} ratingsb={<FaStar />}ratingsc={<FaStar />}ratingsd={<FaStar />}details={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} prices={"From"} payment={" Ksh. 25,000"} price={"per Adult"} link={"Explore Now"}/>
          <Card img={lNakuru} title={"Lake Nakuru"} ratings={<FaStar /> }ratingsa={<FaStar />} ratingsb={<FaStar />}ratingsc={<FaStar />}ratingsd={<FaStarHalfStroke />}details={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} prices={"From"} payment={" Ksh. 45,000"} price={"per Adult"} link={"Explore Now"}/>
        </div>
      </div>
    </>
  )
}

export default Destinations
