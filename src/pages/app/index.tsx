import Header from "@/components/header";
import Navbar from "@/components/navbar";

import { Outlet } from "react-router-dom";
import { cn } from "@/helpers";
import { useUI } from "@/stores";

export default function App() {
  const [uiData] = useUI();

  return (
    <>
      <Header
        className={cn("h-header transition-margin duration-500", uiData.isShowNavbar ? "md:ml-sidebar-width" : "ml-0")}
      />

      <main
        className={cn(
          "p-2 h-content-without-header transition-margin duration-500",
          uiData.isShowNavbar ? "md:ml-sidebar-width" : "ml-0"
        )}
      >
        <Outlet />
      </main>

      <Navbar />
    </>
  );
}
