import Intro from '../../components/Intro/Intro'
import Header from '../../components/Header/Header'
import Pallate from '../../components/Pallate/Pallate'
import wellness from '../../images/wellness.jpg'
import beach from '../../images/beach-holiday.jpg'
import culinary from '../../images/culinary.jpg'
import cultural from '../../images/cultural-tours.jpg'
import eco from '../../images/eco-tours.jpg'
import family from '../../images/family-adventures.jpg'
import honeyMoon from '../../images/honeymoon.jpg'
import luxury from '../../images/luxury-tours.jpg'
import wildlife from '../../images/wildlife.jpg'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import './Safari.css'

function Safari() {
  return (
    <>
      <div className="safari-section">
        <div className="safari-headings">
          <Header />
          <div className="safari-intro">
            <Intro title="Our Safaris" text="Take a trip anywhere you choose with Premier Safari and Adventure" color="white" />
          </div>
        </div>
        <div className="safari-types">
          <div className="safari-type">
            <Pallate photo={wellness} safari={"Wellness Safari"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"Meldives"} gps={<IoLocationOutline />} gpsa={"Beijing, China"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$950"} offer={"$1000"} />
            <Pallate photo={wellness} safari={"Wellness Safari"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"Meldives"} gps={<IoLocationOutline />} gpsa={"Beijing, China"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$950"} offer={"$1000"} />
            <Pallate photo={wellness} safari={"Wellness Safari"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"Meldives"} gps={<IoLocationOutline />} gpsa={"Beijing, China"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$950"} offer={"$1000"} />
            <Pallate photo={wellness} safari={"Wellness Safari"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"Meldives"} gps={<IoLocationOutline />} gpsa={"Beijing, China"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$950"} offer={"$1000"} />
            <Pallate photo={wellness} safari={"Wellness Safari"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"Meldives"} gps={<IoLocationOutline />} gpsa={"Beijing, China"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$950"} offer={"$1000"} />
            <Pallate photo={wellness} safari={"Wellness Safari"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"Meldives"} gps={<IoLocationOutline />} gpsa={"Beijing, China"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$950"} offer={"$1000"} />
            <Pallate photo={wellness} safari={"Wellness Safari"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"Meldives"} gps={<IoLocationOutline />} gpsa={"Beijing, China"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$950"} offer={"$1000"} />
            <Pallate photo={wellness} safari={"Wellness Safari"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"Meldives"} gps={<IoLocationOutline />} gpsa={"Beijing, China"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$950"} offer={"$1000"} />
            <Pallate photo={wellness} safari={"Wellness Safari"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"Meldives"} gps={<IoLocationOutline />} gpsa={"Beijing, China"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$950"} offer={"$1000"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Safari
