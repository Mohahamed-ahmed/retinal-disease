/* eslint-disable react/prop-types */
import classes from "./Loader.module.css";

function Loader(props) {
  return (
    <svg
      viewBox="25 25 50 50"
      className={`${classes.loader} ${props.className}`}
    >
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  );
}

export default Loader;
