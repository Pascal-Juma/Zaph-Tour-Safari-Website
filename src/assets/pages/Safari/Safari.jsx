import Intro from '../../components/Intro/Intro'
import Header from '../../components/Header/Header'
import Newsletter from '../../pages/Home/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
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
import Platter from '../../components/Platter/Platter'
import cheetah from '../../videos/cheetah.mp4'
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
            <Pallate photo={wellness} safari={"Wellness Safari"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStar />} city={"Meldives"} gps={<IoLocationOutline />} gpsa={"Beijing, China"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$950"} offer={"$1000"} cta={"Book Now"}/>
            <Pallate photo={culinary} safari={"Culinary Safari"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStar />} city={"Langlea, VA"} gps={<IoLocationOutline />} gpsa={"Nairobi, Kenya"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$850"} offer={"$900"} cta={"Book Now"}/>
            <Pallate photo={honeyMoon} safari={"Honeymoon Tours"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStar />} city={"Mtwapa"} gps={<IoLocationOutline />} gpsa={"Mombasa, Kenya"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$1500"}cta={"Book Now"}/>
            <Pallate photo={family} safari={"Family Adventures"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"LackLand"} gps={<IoLocationOutline />} gpsa={"San Antonio, TX"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$450"} offer={"$499"} cta={"Book Now"}/>
            <Pallate photo={cultural} safari={"Cultural Adventures"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"Sri Harmandir Sahib"} gps={<IoLocationOutline />} gpsa={"New Delhi, India"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$800"}cta={"Book Now"}/>
            <Pallate photo={wildlife} safari={"Wildlife Adventures"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStar />} city={"Impala National Park"} gps={<IoLocationOutline />} gpsa={"Kisumu, Kenya"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$1350"} offer={"$1499"} cta={"Book Now"}/>
            <Pallate photo={eco} safari={"Eco Tours"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStar />} city={"Batian, Lenana Peak"} gps={<IoLocationOutline />} gpsa={"Mt.Kenya, Kenya"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$500"} offer={"$600"}cta={"Book Now"} />
            <Pallate photo={luxury} safari={"Luxury Tours"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"Santorini"} gps={<IoLocationOutline />} gpsa={"South Aegean Sea, Greece"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$1650"} offer={"$1699"} cta={"Book Now"}/>
            <Pallate photo={beach} safari={"Beach Holidays"} likes={<FaStar />} likesa={<FaStar />} likesb={<FaStar />} likesc={<FaStar />} likesd={<FaStarHalfStroke />} city={"Praia da Falesia"} gps={<IoLocationOutline />} gpsa={"Olhos de Agua, Portugal"} awareness={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} pricing={"$250"} cta={"Book Now"} />
          </div>
        </div>
      </div>
      <div className="safari-intro">
        <Intro title="Our blogs" text="You Can Read Some of Our Blogs From Here" color="black"/>
      </div>
      <div className="blog-description">
        <Platter video={cheetah} trends={"Why do people Travel? Reasons people travel in 2025"} extend={"Read More"}/>
        <Platter video={cheetah} trends={"Jungle King in Kisumu Impala National Park "} extend={"Read More"}/>
        <Platter video={cheetah} trends={"Travellers visiting the Great Santorini Island Camping"} extend={"Read More"}/>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Safari
