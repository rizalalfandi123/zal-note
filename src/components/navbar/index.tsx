import NavbarList from "./navbar-list";
import Button from "@/components/button";

import { cn } from "@/helpers";
import { useUI } from "@/stores";
import { ChevronLeft } from "lucide-react";

export default function Navbar() {
  const [uiData, setUiData] = useUI();

  const toggleMiniNavbar = () => setUiData({ ...uiData, isMiniNavbar: !uiData.isMiniNavbar });

  return (
    <nav
      className={cn(
        "py-4 px-2 left-0 fixed h-dynamic-screen -translate-x-full bottom-0 overflow-x-hidden transition-[transform,width] duration-500 bg-background",
        "md:border-r md:py-2",
        uiData.isMiniNavbar ? "w-mini-navbar-width" : "w-72",
        uiData.isShowNavbar ? "md:translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="h-full relative">
        <NavbarList />

        <Button
          size="icon"
          variant="outline"
          className={cn("absolute bottom-2", uiData.isMiniNavbar ? "right-px" : "right-2")}
          onClick={toggleMiniNavbar}
        >
          <ChevronLeft className={cn("transition-[transform] duration-500",{ "rotate-180": uiData.isMiniNavbar })} />
        </Button>
      </div>
    </nav>
  );
}
