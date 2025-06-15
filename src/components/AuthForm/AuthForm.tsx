import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getError, loginUser, registerUser } from "../../auth/authSlice";

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
      <h2 className="font-comic mb-1 text-4xl font-bold">Добро пожаловать</h2>
      <form className="flex flex-col gap-4 rounded-2xl border-2 border-black p-25 shadow-xl">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Почта"
          className="m-0 rounded-2xl border-2 border-black bg-white/5 p-0 py-4 text-center text-5xl shadow-xl outline-0 hover:bg-sky-50/20 focus:bg-sky-300/20"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Пароль"
          className="m-0 rounded-2xl border-2 border-black bg-white/5 p-0 py-4 text-center text-5xl shadow-xl outline-0 hover:bg-sky-50/20 focus:bg-sky-300/20"
          required
        />
        <div className="flex justify-between gap-2">
          <button
            className="m-0 flex-1 cursor-pointer rounded-xl border-2 border-black bg-sky-300/70 p-0 py-1 text-4xl shadow-xl outline-0 hover:bg-sky-500/60 focus:bg-sky-600/70"
            onClick={onRegistration}
          >
            Регистрация
          </button>
          <button
            className="m-0 flex-1 cursor-pointer rounded-xl border-2 border-black bg-sky-300/70 p-0 py-1 text-4xl shadow-xl outline-0 hover:bg-sky-500/60 focus:bg-sky-600/70"
            onClick={onLogin}
          >
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
