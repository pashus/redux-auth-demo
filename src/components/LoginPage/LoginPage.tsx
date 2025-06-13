import { useNavigate } from "react-router-dom";
import { getIsAuth } from "../../auth/authSlice";
import { useAppSelector } from "../../hooks/hooks";
import AuthForm from "../AuthForm/AuthForm";
import Header from "../Header/Header";
import Page from "../Page/Page";
import styles from "./LoginPage.module.css";
import { useEffect } from "react";

const LoginPage = () => {
  const isAuth = useAppSelector(getIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/users-list");
    }
  }, [isAuth, navigate]);

  return (
    <Page className={styles.loginPage}>
      <Header></Header>
      <div className={styles.formSection}>
        <AuthForm></AuthForm>
      </div>
    </Page>
  );
};

export default LoginPage;
