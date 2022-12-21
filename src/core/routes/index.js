import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "@components/Loader";
import { ErrorFallback } from "@components/ErrorBoundary";
const Login = React.lazy(() => import("@routes/Login"));
const Register = React.lazy(() => import("@routes/Register"));
const Profile = React.lazy(() => import("@routes/Profile"));
const Dashboard = React.lazy(() => import("@routes/Dashboard"));
const Landing = React.lazy(() => import("@routes/Landing"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Landing />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<Loader />}>
        <Dashboard />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/dashboard/profile",
    element: (
      <Suspense fallback={<Loader />}>
        <Profile />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loader />}>
        <Register />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
  },
]);

export default router;
