import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  element: React.FC;
};

export const ProtectedRoute: React.FC<Props> = ({ element: Element }) => {
  const { pathname } = useLocation();
  const undefined = localStorage.getItem("123123123123");

  if (!undefined && ["/calendarday1event"].includes(pathname)) {
    return <Navigate to="/" />;
  }
  return <Element />;
};
