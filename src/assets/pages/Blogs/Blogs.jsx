import './Blogs.css'
import Header from '../../components/Header/Header'
import Intro from '../../components/Intro/Intro'
import Platter from '../../components/Platter/Platter'
import cheetah from '../../videos/cheetah.mp4'
import lioness from '../../videos/lioness.mp4'
import cookingCamp from '../../videos/campers.mp4'
import Newsletter from '../../pages/Home/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'


function Blogs() {
  return (
    <>
    <div className="blogs-headings">
    <Header />
    <div className="blogs-intro">
        <Intro title="Featured blog Content" text="Read Premier Content that we Produce Weekly, Monthly and Annually" color="white" />
    </div>
    </div>
    <div className="blogs-content">
        <Platter video={cheetah} trends={"Why do people Travel? Reasons people travel in 2025"} extend={"Read More"}/>
        <Platter video={lioness} trends={"A lioness resting on the ground in the Impala National Park, Kisumu"} extend={"Read More"}/>
        <Platter video={cookingCamp} trends={"Campers cooking food on a portable stove outside a tent"} extend={"Read More"}/>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Blogs
