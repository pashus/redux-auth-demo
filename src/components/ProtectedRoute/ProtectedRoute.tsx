import type { ReactNode } from "react";
import { getIsAuth, getLoading } from "../../auth/authSlice";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoading = useAppSelector(getLoading);
  const isAuth = useAppSelector(getIsAuth);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!isAuth) {
    return <Navigate replace to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
