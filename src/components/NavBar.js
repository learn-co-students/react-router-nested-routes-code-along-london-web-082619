import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px"
      }}>
      <NavLink style={{ marginRight: "10px" }} to="/movies">
        Movies
      </NavLink>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue"
        }}>
        Home
      </NavLink>
    </div>
  );
};
/* Add basic styling for NavLinks */
const link = {
  marginRight: "10px",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

export default NavBar;
