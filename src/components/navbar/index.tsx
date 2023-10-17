import NavbarList from "./navbar-list";

import { cn } from "@/helpers";
import { useUI } from "@/stores";

export default function Navbar() {
  const [uiData] = useUI();

  return (
    <nav
      className={cn(
        "w-72 py-4 px-2 left-0 fixed h-dynamic-screen -translate-x-full bottom-0 overflow-x-hidden transition-[transform] duration-500 bg-background",
        "md:border-r",
        uiData.isShowNavbar ? "md:translate-x-0" : "-translate-x-full"
        // {"-translate-x-full": !}
      )}
    >
      <NavbarList />
    </nav>
  );
}
