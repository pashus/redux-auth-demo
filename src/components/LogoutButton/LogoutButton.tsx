import { logout } from "../../auth/authSlice";
import { useAppDispatch } from "../../hooks/hooks";
import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  function onLogout() {
    dispatch(logout());
  }
  return (
    <button className={styles.button} onClick={onLogout}>
      Выйти
    </button>
  );
};

export default LogoutButton;
