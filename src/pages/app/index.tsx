import Header from "@/components/header";
import Navbar from "@/components/navbar";

import { Navigate, Outlet } from "react-router-dom";
import { cn } from "@/helpers";
import { useUI } from "@/stores";
import { pb } from "@/instances";

export default function App() {
  const [uiData] = useUI();

  if (!pb.authStore.isValid) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header
        className={cn(
          "h-header transition-margin duration-500",
          uiData.isShowNavbar ? (uiData.isMiniNavbar ? "md:ml-mini-navbar-width" : "md:ml-navbar-width") : "ml-0"
        )}
      />

      <main
        className={cn(
          "p-2 h-content-without-header transition-margin duration-500",
          uiData.isShowNavbar ? (uiData.isMiniNavbar ? "md:ml-mini-navbar-width" : "md:ml-navbar-width") : "ml-0"
        )}
      >
        <Outlet />
      </main>

      <Navbar />
    </>
  );
}
