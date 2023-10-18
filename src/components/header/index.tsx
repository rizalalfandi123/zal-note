import Button from "@/components/button";
import NavbarList from "@/components/navbar/navbar-list";

import { ChevronRight, Menu, Moon, Sun } from "lucide-react";
import { cn } from "@/helpers";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/sheet";
import { useUI } from "@/stores";

interface HeaderProps extends React.ComponentProps<"header"> {}

export default function Header({ className, ...props }: HeaderProps) {
  const [uiData, setUiData] = useUI();

  const toggleVisibilityNavbar = () => setUiData({ ...uiData, isShowNavbar: !uiData.isShowNavbar });

  const toggleDarkMode = () => setUiData({ ...uiData, isDarkMode: !uiData.isDarkMode });

  const SreenModeIcon = uiData.isDarkMode ? Sun : Moon;

  return (
    <header className={cn("p-2 flex justify-between items-center border-b", "md:py-4", className)} {...props}>
      <div id="left-content">
        <Sheet
          open={uiData.isShowDrawerNavbar}
          onOpenChange={(nextStatus) => setUiData({ ...uiData, isShowDrawerNavbar: nextStatus })}
        >
          <SheetTrigger asChild>
            <Button size="icon-sm" variant="outline" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent withCloseButton={false} className="px-2">
            <div className="w-full h-full relative">
              <NavbarList />

              <SheetClose asChild>
                <Button size="icon-sm" variant="outline" className="absolute bottom-0 left-2">
                  <ChevronRight />
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Button size="icon-sm" variant="outline" className="hidden md:flex" onClick={toggleVisibilityNavbar}>
          <Menu />
        </Button>
      </div>

      <div id="right-content">
        <Button size="icon-sm" variant="ghost" onClick={toggleDarkMode}>
          <SreenModeIcon />
        </Button>
      </div>
    </header>
  );
}
