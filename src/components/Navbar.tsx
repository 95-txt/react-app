import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  let [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  let divice = "horizondal";
  if (innerWidth < innerHeight) divice = "vertical";
  else {
    divice = "horizondal";
    click = true;
  }

  const content = (
    <>
      <div className={divice + "List"} onClick={handleClick}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/designs"}>Designs</NavLink>
        <NavLink to={"/arts"}>Arts</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/resume"}>Resume</NavLink>
      </div>
    </>
  );

  return (
    <>
      <nav className={divice + "Nav"}>
        <div className={divice + "NavTop"}>
          <button className={divice + "Btn"} onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {click && content}
      </nav>
    </>
  );
};

export default Navbar;
