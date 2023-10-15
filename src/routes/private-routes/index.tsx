import React from "react";
import PageWrapper from "@/components/page-wrapper";

import { Route, Routes } from "react-router-dom";
import { pb } from "@/instances";

const App = React.lazy(() => import("@/pages/app"));
const Notes = React.lazy(() => import("@/pages/notes"));

export default function PrivateRoutes() {
  if (!pb.authStore.isValid) {
    return null;
  }

  return (
    <>
      <Routes>
        <Route
          path="/app"
          element={
            <PageWrapper>
              <App />
            </PageWrapper>
          }
        >
          <Route
            path="notes"
            element={
              <PageWrapper>
                <Notes />
              </PageWrapper>
            }
          />
          <Route
            index
            element={
              <PageWrapper>
                <Notes />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
