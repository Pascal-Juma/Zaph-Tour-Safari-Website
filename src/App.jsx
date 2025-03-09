import {Routes, Route} from 'react-router-dom'
import Home from './assets/pages/Home/Home'
import Blog from './assets/pages/Blog/Blog'
import Destination from './assets/pages/Destination/Destination'
import Safari from './assets/pages/Safari/Safari'
import Contact from './assets/pages/Safari/Safari'
import About from './assets/pages/Home/About/About'
import Destinations from './assets/pages/Home/Destinations/Destinations'
import Testimonials from './assets/pages/Home/Testimonials/Testimonials'
import Newsletter from './assets/pages/Home/Newsletter/Newsletter'

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<Blog />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <About />
      <Destinations />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default App
