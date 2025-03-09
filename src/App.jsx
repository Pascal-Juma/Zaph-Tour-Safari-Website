import {Routes, Route} from 'react-router-dom'
import Home from './assets/pages/Home/Index/Home'
import Blog from './assets/pages/Blog/Blog'
import Destination from './assets/pages/Destination/Destination'
import Safari from './assets/pages/Safari/Safari'
import Contact from './assets/pages/Safari/Safari'
import Footer from './assets/components/Footer/Footer'

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
      <Footer />
    </>
  )
}

export default App
