import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UsersList from "./components/UsersList/UsersList";
import UndefinedPage from "./components/Undefined/Undefined";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
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
