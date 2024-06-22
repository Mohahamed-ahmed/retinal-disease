import classes from "./MainNavLinks.module.css";
import { NavLink } from "react-router-dom";

function MainNavLinks() {
  let content;

  if (localStorage.getItem("role") === "doctor") {
    content = (
      <>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? classes.active : undefined)}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="doctor/appointments"
            className={({ isActive }) => (isActive ? classes.active : undefined)}
            end
          >
            Appointments
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/doctor/profile"
            className={({ isActive }) => (isActive ? classes.active : undefined)}
            end
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactUs"
            className={({ isActive }) => (isActive ? classes.active : undefined)}
            end
          >
            Contact Us
          </NavLink>
        </li>
      </>
    );
  }
  return (
    <ul className={classes.links}>
      {content ? (
        content
      ) : (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointments"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              My Appointments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactUs"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              Contact Us
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
}

export default MainNavLinks;
