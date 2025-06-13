import styles from "./Header.module.css";
import logo from "../../assets/eagle-logo-png.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Логотип" className={styles.img} />
      <p className={styles.text}>REDUX-AUTH-DEMO</p>
      <img src={logo} alt="Логотип" className={styles.img} />
    </div>
  );
};

export default Header;
