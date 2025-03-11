import { NavLink } from "react-router-dom";
import "./Links.css";

function Links({ to, label }) {
  return (
    <>
      <li>
        <NavLink
          to={to}
          className={({ isActive }) => isActive === true && "active-link"}
        >
          {label}
        </NavLink>
      </li>
    </>
  );
}

export default Links;
