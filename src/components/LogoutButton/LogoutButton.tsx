import { logout } from "../../auth/authSlice";
import { useAppDispatch } from "../../hooks/hooks";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  function onLogout() {
    dispatch(logout());
  }
  return (
    <button
      className="cursor-pointer border-2 bg-sky-400/70 text-6xl"
      onClick={onLogout}
    >
      Выйти
    </button>
  );
};

export default LogoutButton;
