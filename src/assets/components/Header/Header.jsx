import './Header.css'
import Button from '../Button/Button'
import Navigation from '../../Navigation/Navigation'
import Logo from '../Logo/Logo'

function Header() {
  return (
    <>
    <div className="header-section">
        <Button btn="Book Now" />
        <Navigation />
        <Logo />
    </div>
    </>
  )
}

export default Header
