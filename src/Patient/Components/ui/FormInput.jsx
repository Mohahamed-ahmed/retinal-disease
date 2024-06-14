/* eslint-disable react/prop-types */
import classes from "./FormInput.module.css";

function FormInput({ input, label, ...props }) {
  return (
    <div className={classes["input-group"]}>
      <input
        required
        type="text"
        name="text"
        autoComplete="off"
        className={classes.input}
        {...input}
        onChange={props.onChange}
      />
      <label htmlFor={input.id} className={classes["user-label"]}>
        {label}
      </label>
    </div>
  );
}

export default FormInput;
