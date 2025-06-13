import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UsersList from "./components/UsersList/UsersList";
import UndefinedPage from "./components/Undefined/Undefined";
import { useAppDispatch } from "./hooks/hooks";
import { useEffect } from "react";
import { checkAuth } from "./auth/authSlice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users-list" />} />
      <Route path="*" element={<UndefinedPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route
        path="users-list"
        element={
          <ProtectedRoute>
            <UsersList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
