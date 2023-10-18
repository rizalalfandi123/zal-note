import React from "react";
import PageWrapper from "@/components/page-wrapper";

import { Route, Routes } from "react-router-dom";
import { pb } from "@/instances";

const App = React.lazy(() => import("@/pages/app"));
const Notes = React.lazy(() => import("@/pages/notes"));
const Tags = React.lazy(() => import("@/pages/tags"));
const Favorites = React.lazy(() => import("@/pages/favorites"));
const NoteBooks = React.lazy(() => import("@/pages/notebooks"));

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
            path="tags"
            element={
              <PageWrapper>
                <Tags />
              </PageWrapper>
            }
          />

          <Route
            path="notebooks"
            element={
              <PageWrapper>
                <NoteBooks />
              </PageWrapper>
            }
          />

          <Route
            path="favorites"
            element={
              <PageWrapper>
                <Favorites />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
