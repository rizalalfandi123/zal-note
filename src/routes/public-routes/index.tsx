import React from "react";
import PageWrapper from "@/components/page-wrapper";
import authRoutes from "@/routes/public-routes/auth.route";

import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("@/pages/home"));

export default function PublicRoutes() {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        {...authRoutes}
      </Routes>
  );
}
