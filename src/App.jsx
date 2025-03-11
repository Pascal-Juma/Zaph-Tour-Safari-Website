import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home/Index/Home";
import AboutUs from "./assets/pages/AboutUs/AboutUs";
import Blog from "./assets/pages/Blog/Blog";
import Destination from "./assets/pages/Destination/Destination";
import Safari from "./assets/pages/Safari/Safari";
import Contact from "./assets/pages/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
