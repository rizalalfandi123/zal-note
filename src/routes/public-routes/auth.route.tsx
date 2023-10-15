import React from "react";
import PageWrapper from "@/components/page-wrapper";

import { Route } from "react-router-dom";

const Login = React.lazy(() => import("@/pages/login"));
const Register = React.lazy(() => import("@/pages/register"));

const authRoutes = [
  <Route
    path="/login"
    element={
      <PageWrapper>
        <Login />
      </PageWrapper>
    }
  />,
  <Route
    path="/register"
    element={
      <PageWrapper>
        <Register />
      </PageWrapper>
    }
  />,
];

export default authRoutes;
