import { pb } from "@/instances";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const onClick = () => {
    if (pb.authStore.isValid) {
      return navigate("/app/notes");
    }

    return navigate("/login");
  };

  return (
    <div>
      <p>Home</p>
      <button onClick={onClick}>get strated</button>
    </div>
  );
}
