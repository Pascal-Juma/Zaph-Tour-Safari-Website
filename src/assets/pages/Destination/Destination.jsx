import './Destination.css'
import Plate from '../../components/Plate/Plate'
import santorini from '../../images/Santorini.jpg'
import tokyo from '../../images/Tokyo.jpg'
import amboseli from '../../images/Amboseli.jpg'
import naks from '../../images/LakeNakuru.jpg'
import kisumu from '../../images/Kisumu.jpg'
import mombasa from '../../images/Mombasa.jpg'
import rwenzori from '../../images/Rwenzori.jpg'
import rio from '../../images/Rio.jpg'
import falls from '../../images/Falls.jpg'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Newsletter from '../Home/Newsletter/Newsletter'

function Destination() {
  return (
    <>
      <div className="destination-container">
        <div className="destination-header">
          <Header />
        </div>
        <h1 className="destination-heading">
          Our Featured Destinations
        </h1>
        <p className="destination-paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sint aliquid eveniet sapiente similique, vero minus exercitationem commodi voluptatem voluptatibus nihil perspiciatis adipisci nobis delectus nulla id aut possimus explicabo, minima natus officiis eius temporibus! Consequuntur alias natus, vitae porro suscipit ullam laboriosam voluptate dolorem reprehenderit, eaque soluta iure? Alias.
        </p>
        <div className="destination-featured">
          <Plate destiny={"Santorini"} rate={<FaStar />} ratea={<FaStar />} rateb={<FaStar />} ratec={<FaStar />} rated={<FaStar />} individual={"From"} sum={"$950"} person={"per person"} group={"From"} total={"$900"} groups={"(10-15) people"} description={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} booking={"Book now"} image={santorini} />
          <Plate destiny={"Tokyo"} rate={<FaStar />} ratea={<FaStar />} rateb={<FaStar />} ratec={<FaStar />} rated={<FaStar />} individual={"From"} sum={"$850"} person={"per person"} group={"From"} total={"$805"} groups={"(10-15) people"} description={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} booking={"Book now"} image={tokyo} />
          <Plate destiny={"Amboseli National Park"} rate={<FaStar />} ratea={<FaStar />} rateb={<FaStar />} ratec={<FaStar />} rated={<FaStarHalfStroke />} individual={"From"} sum={"$150"} person={"per person"} group={"From"} total={"$105"} groups={"(10-15) people"} description={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} booking={"Book now"} image={amboseli} />
          <Plate destiny={"Lake Nakuru"} rate={<FaStar />} ratea={<FaStar />} rateb={<FaStar />} ratec={<FaStar />} rated={<FaStarHalfStroke />} individual={"From"} sum={"$750"} person={"per person"} group={"From"} total={"$700"} groups={"(10-15) people"} description={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} booking={"Book now"} image={naks} />
          <Plate destiny={"Kisumu National Park"} rate={<FaStar />} ratea={<FaStar />} rateb={<FaStar />} ratec={<FaStar />} rated={<FaStar />} individual={"From"} sum={"$950"} person={"per person"} group={"From"} total={"$899"} groups={"(10-15) people"} description={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} booking={"Book now"} image={kisumu} />
          <Plate destiny={"Mombasa "} rate={<FaStar />} ratea={<FaStar />} rateb={<FaStar />} ratec={<FaStar />} rated={<FaStarHalfStroke />} individual={"From"} sum={"$650"} person={"per person"} group={"From"} total={"$605"} groups={"(10-15) people"} description={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} booking={"Book now"} image={mombasa} />
          <Plate destiny={"Bamboo in Mt. Ruwenzori"} rate={<FaStar />} ratea={<FaStar />} rateb={<FaStar />} ratec={<FaStar />} rated={<FaStarHalfStroke />} individual={"From"} sum={"$350"} person={"per person"} group={"From"} total={"$300"} groups={"(10-15) people"} description={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} booking={"Book now"} image={rwenzori} />
          <Plate destiny={"The Great Falls"} rate={<FaStar />} ratea={<FaStar />} rateb={<FaStar />} ratec={<FaStar />} rated={<FaStar/>} individual={"From"} sum={"$950"} person={"per person"} group={"From"} total={"$900"} groups={"(10-15) people"} description={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} booking={"Book now"} image={falls} />
          <Plate destiny={"Rio de JaNeiro"} rate={<FaStar />} ratea={<FaStar />} rateb={<FaStar />} ratec={<FaStar />} rated={<FaStarHalfStroke />} individual={"From"} sum={"$250"} person={"per person"} group={"From"} total={"$205"} groups={"(10-15) people"} description={"Lorem ipsum dolor sit amet, consect elit sed do eiusmod tempor incididunt."} booking={"Book now"} image={rio} />
        </div>
        </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Destination
