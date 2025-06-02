import { Navigate, Route, Routes } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import Undefined from "./components/Undefined/Undefined";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="login" element={<AuthForm />} />
      <Route path="*" element={<Undefined />} />
    </Routes>
  );
};

export default App;
