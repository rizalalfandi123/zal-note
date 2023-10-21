import { pb } from "@/instances";
import { type UserModel } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import UserMenuDropdownContainer from "./user-menu-dropdown-container";

export default function UserMenu() {
  const user = pb.authStore.model as UserModel;

  const fallback = (user.name ? user.name : user.email).substring(0, 2).toUpperCase();

  return (
    <UserMenuDropdownContainer>
      <Avatar className="cursor-pointer">
        <AvatarImage src={user.avatar} alt={user.email} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </UserMenuDropdownContainer>
  );
}
