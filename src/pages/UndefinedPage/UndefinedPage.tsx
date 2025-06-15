import Page from "../Page/Page";
import styles from "./UndefinedPage.module.css";

const UndefinedPage = () => {
  return (
    <Page>
      <p className={styles.text}>Такой страницы нет!</p>
    </Page>
  );
};

export default UndefinedPage;
