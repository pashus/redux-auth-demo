import AuthForm from "../AuthForm/AuthForm";
import Header from "../Header/Header";
import Page from "../Page/Page";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
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
