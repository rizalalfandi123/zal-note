import { useNavigate } from "react-router-dom";
import { LogOut, Settings } from "lucide-react";
import { DropdownMenuSeparator } from "@/components/dropdown-menu";
import { UserMenuDropdown, UserMenuItem } from "./user-menu-dropdown";
import { pb } from "@/instances";

export default function UserMenuDropdownContainer({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();

  const handleLogout = () => {
    pb.authStore.clear();
    navigate("/login");
  };

  const userListMenu: Array<UserMenuItem | React.ReactNode> = [
    {
      icon: Settings,
      label: "Settings",
    },
    <DropdownMenuSeparator key="separator" />,
    {
      icon: LogOut,
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return <UserMenuDropdown listMenu={userListMenu} children={children} />;
}
