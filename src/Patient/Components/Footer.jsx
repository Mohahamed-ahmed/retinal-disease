import "./footer.css";
import LocationIcon from "./ui/locationIcon";
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="box">
          <h1>Quick Links</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contactUs">Contact</a>
            </li>
            <li>
              <a href="appointments">Appointments</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </div>
        <div className="box">
          <h1>Clinic Address</h1>
          <p className="location">
            <LocationIcon />
            25 elnahas street , cairo. egypt
          </p>
        </div>
        <div className="box">
          <h1>Contacts</h1>
          <p>phone Number: 01229979163</p>
          <p>Email: clinic@gmail.com</p>
        </div>
      </div>
      <div className="lastPart">
        Copyright © 2024 All rights reserved | by Mohammed Ahmed
      </div>
    </footer>
  );
}

export default Footer;
