import { buttonVariants } from "@/components/button";
import { cn } from "@/helpers";
import { ScrollIcon, type LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

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
    icon: ScrollIcon,
    label: "Notebooks",
    pathname: "/app/notebooks",
  },
  {
    icon: ScrollIcon,
    label: "Favorites",
    pathname: "/favorites",
  },
  {
    icon: ScrollIcon,
    label: "Tags",
    pathname: "/tags",
  },
];

export default function NavbarList() {
  return (
    <ul className="space-y-2">
      {navbarItems.map(({ icon: Icon, label, pathname }) => {
        return (
          <li key={label}>
            <NavLink
              to={pathname}
              className={({ isActive }) =>
                cn(buttonVariants({ variant: isActive ? "default" : "ghost" }), "w-full justify-start px-2")
              }
            >
              <Icon className="inline-block mr-2 w-5 h-5" /> {label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
