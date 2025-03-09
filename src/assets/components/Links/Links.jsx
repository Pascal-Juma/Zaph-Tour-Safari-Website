import {Navlinks} from 'react-router-dom'
import './Links.css'

function Links({to, label}) {
  return (
    <>
      <li>
        <Navlinks to={to} className={({isActive}) => isActive === true && 'active-link'}>{label}</Navlinks>
      </li>
    </>
  )
}

export default Links
