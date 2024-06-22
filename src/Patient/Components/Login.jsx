import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { useMutation } from "@tanstack/react-query";
import authService from "../../services/auth";
import Loader from "./ui/Loader";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { getProfile } from "../../store/user-actions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: authService.login,
    onSuccess: (response) => {
      if (response.data) {
        dispatch(uiActions.setUiChanged(true));
        dispatch(
          uiActions.addNotification({
            status: "success",
            title: "Success",
            message: "LoggedIn Successfully.",
          })
        );
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("role", response.data.userData.role);
        dispatch(getProfile(response.data.userData.role));
        navigate("/");
      } else {
        dispatch(uiActions.setUiChanged(true));
        dispatch(
          uiActions.addNotification({
            status: "error",
            title: "Error",
            message: response.error?.info.message || "Something went wrong!",
          })
        );
      }
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    const loginData = {
      email,
      password,
    };

    mutate(loginData);
  };

  return (
    <div className={classes.login__form__group}>
      <div className={classes.text}>
        <h2>Welcome back!</h2>
      </div>
      <Form method="post" onSubmit={handleLogin}>
        <div className={classes.input}>
          <input
            name="email"
            className={classes.login__form__field}
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className={classes.login__form__label}>
            Email
          </label>
        </div>
        <div className={classes.input}>
          <input
            name="password"
            className={classes.login__form__field}
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className={classes.login__form__label}>
            Password
          </label>
        </div>
        <div className={classes.loginButton}>
          <button className={classes.SignInButton}>
            {isPending ? <Loader className={classes.loader} /> : "Sign in"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
