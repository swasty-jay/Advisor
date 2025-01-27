import { NavLink } from "react-router";

export function AppNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/About" end>
        About
      </NavLink>
      <NavLink to="/services">service</NavLink>
      {/* <NavLink to="/account">Account</NavLink> */}
    </nav>
  );
}
