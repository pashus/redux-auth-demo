import { useState } from "react";
import {
  useAppDispatch,
  useAppSelector as useSelector,
} from "../../hooks/hooks";
import {
  getIsAuth,
  getLoading,
  loginUser,
  logout,
  registerUser,
} from "../../auth/authSlice";
import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getLoading);
  const isAuth = useSelector(getIsAuth);

  function onRegistration(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    dispatch(registerUser(userData));
  }

  function onLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    dispatch(loginUser(userData));
  }

  function onLogout() {
    dispatch(logout());
  }

  return (
    <div>
      <h2 className={styles.title}>Добро пожаловать</h2>
      <form className={styles.form}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Почта"
          className={styles.input}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Пароль"
          className={styles.input}
        />
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onRegistration}>
            Регистрация
          </button>
          <button className={styles.button} onClick={onLogin}>
            Вход
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
