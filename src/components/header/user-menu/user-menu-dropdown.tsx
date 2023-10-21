import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  type DropdownMenuItemProps,
} from "@/components/dropdown-menu";
import { LucideIcon } from "lucide-react";

export interface UserMenuItem extends DropdownMenuItemProps {
  label: string;
  icon: LucideIcon;
}

function isUserMenuItem(item: UserMenuItem | React.ReactNode): item is UserMenuItem {
  return typeof (item as UserMenuItem).label === "string";
}

interface UserMenuDropdownProps extends React.PropsWithChildren {
  listMenu: Array<UserMenuItem | React.ReactNode>;
}

export function UserMenuDropdown({ children, listMenu }: UserMenuDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent align="end" sideOffset={12} className="w-56">
        {listMenu.map((item) => {
          if (isUserMenuItem(item)) {
            const { icon: Icon, label, ...dropdownItemProps } = item;
            return (
              <DropdownMenuItem key={item.label} {...dropdownItemProps}>
                <Icon className="inline-flex mr-3 w-4 h-4" /> {label}
              </DropdownMenuItem>
            );
          }

          return item;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
