import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getError, loginUser, registerUser } from "../../auth/authSlice";
import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState("");
  const error = useAppSelector(getError) as string;
  const dispatch = useAppDispatch();

  function onRegistration(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      setValid("Пожалуйста, заполните все поля.");
      return;
    }
    setValid("");
    dispatch(registerUser(userData));
  }

  function onLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      setValid("Пожалуйста, заполните все поля.");
      return;
    }
    setValid("");
    dispatch(loginUser(userData));
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
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Пароль"
          className={styles.input}
          required
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
      <span>{valid || error || "\u00A0"}</span>
    </div>
  );
};
//добавить риалтайм
export default AuthForm;
