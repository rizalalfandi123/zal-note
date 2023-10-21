import { buttonVariants } from "@/components/button";
import { cn } from "@/helpers";
import { useUI } from "@/stores";
import { ScrollIcon, type LucideIcon, ScrollText, Star, Hash } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export interface NavbarItem {
  label: string;
  icon: LucideIcon;
  pathname: string;
}

const navbarItems: Array<NavbarItem> = [
  {
    icon: ScrollIcon,
    label: "Notes",
    pathname: "/app/notes",
  },
  {
    icon: ScrollText,
    label: "Notebooks",
    pathname: "/app/notebooks",
  },
  {
    icon: Star,
    label: "Favorites",
    pathname: "/app/favorites",
  },
  {
    icon: Hash,
    label: "Tags",
    pathname: "/app/tags",
  },
];

export default function NavbarList() {
  const [uiState, setUiState] = useUI();

  const navigate = useNavigate();

  const handleNavItemClick: (destination: string) => React.MouseEventHandler<HTMLAnchorElement> =
    (destination) => (event) => {
      event.preventDefault();

      navigate(destination);
      setUiState({ ...uiState, isShowDrawerNavbar: false });
    };

  return (
    <ul className="space-y-2">
      {navbarItems.map(({ icon: Icon, label, pathname }) => {
        return (
          <li key={label}>
            <NavLink
              to={pathname}
              className={({ isActive }) =>
                cn(
                  buttonVariants({
                    variant: isActive ? "default" : "ghost",
                    size: uiState.isMiniNavbar ? "icon" : "default",
                  }),
                  "justify-start",
                  uiState.isMiniNavbar && "md:justify-center",
                  "w-full px-2"
                )
              }
              onClick={handleNavItemClick(pathname)}
            >
              <Icon className={cn("mr-2 inline-flex w-5 h-5", { "md:mr-0": uiState.isMiniNavbar })} />{" "}
              <span className={cn({ "md:hidden": uiState.isMiniNavbar })}>{label}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
