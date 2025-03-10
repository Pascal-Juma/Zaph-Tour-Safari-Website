import './Navigation.css'
import Links from '../components/Links/Links'

function Navigation() {
  return (
    <>
    <nav className="header-navigation">
      <ol className="nav-list">
          <Links to={"/contact"} label="Contact Us" />
          <Links to={"/blog"} label="Blog" />
          <Links to={"/safari"} label="Safari" />
          <Links to={"/destination"} label="Destination" />
          <Links to={"/blog"} label="About Us" />
          <Links to={"/"} label="Home" />
      </ol>
   </nav>
    </>
  )
}

export default Navigation
