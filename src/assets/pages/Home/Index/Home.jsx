import Hero from '../Hero/Hero'
import About from '../About/About'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Destinations from '../Destinations/Destinations'
import Testimonials from '../Testimonials/Testimonials'
import Newsletter from '../Newsletter/Newsletter'
import './Home.css'

function Home() {
  return (
    <>
        <section className="hero-section">
          <Header />
          <Hero />
        </section>
          <About />
          <Destinations />
          <Testimonials />
          <Newsletter />
          <Footer />
    </>
  )
}

export default Home
