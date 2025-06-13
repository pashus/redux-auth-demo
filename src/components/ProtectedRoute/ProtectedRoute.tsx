import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../auth/authSlice";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuth = useSelector(getIsAuth);

  if (!isAuth) {
    return <Navigate replace to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
