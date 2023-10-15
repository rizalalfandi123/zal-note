import PrivateRoutes from "./private-routes";
import PublicRoutes from "./public-routes";

export default function AppRoutes() {
  return (
    <>
      <PublicRoutes />
      <PrivateRoutes/>
    </>
  );
}
