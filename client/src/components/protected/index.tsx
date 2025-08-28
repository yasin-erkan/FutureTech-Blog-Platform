import type { FC } from "react";
import { useAuth } from "../../providers/auth-provider";
import { Outlet, Navigate } from "react-router-dom";
import Loader from "../loader";


const Protected: FC = () => {
  // get user and loading from auth provider
  const { user, loading } = useAuth();

  // if loading is true, show loader
  if (loading || user === undefined) {
    return <Loader />;
  }

  // if user is null, redirect to home page
  if (user === null) {
    return <Navigate to="/" />;
  }

  // if user is not null, show protected page
  return <Outlet />;
};

export default Protected;
