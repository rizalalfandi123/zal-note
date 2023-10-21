import { cn } from "@/helpers";
import { Loader2 } from "lucide-react";

interface LoaderButtonProps {
  isShow: boolean;
}

export default function LoaderButton({ isShow }: LoaderButtonProps) {
  return <Loader2 className={cn("w-5 h-5 animate-spin mr-1", isShow ? "inline-flex" : "hidden")} />;
}
