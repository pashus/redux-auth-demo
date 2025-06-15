import logo from "../../assets/eagle-logo-png.png";

const Header = () => {
  return (
    <div className="flex max-h-25 flex-row justify-center gap-4 pt-4">
      <img src={logo} alt="Логотип" />
      <p className="m-0 p-0 text-center text-7xl font-semibold">
        REDUX-AUTH-DEMO
      </p>
      <img src={logo} alt="Логотип" />
    </div>
  );
};

export default Header;
