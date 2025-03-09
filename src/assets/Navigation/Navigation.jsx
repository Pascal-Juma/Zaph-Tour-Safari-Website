import './Navigation.css'
import Links from '../components/Links/Links'

function Navigation() {
  return (
    <>
    <nav className="header-navigation">
      <ol className="nav-list">
          <Links to={"/contact"} label="contact" />
          <Links to={"/blog"} label="blog" />
          <Links to={"/safari"} label="safari" />
          <Links to={"/destination"} label="destination" />
          <Links to={"/blog"} label="about" />
          <Links to={"/"} label="home" />
      </ol>
   </nav>
    </>
  )
}

export default Navigation
