import { cn } from "@/helpers";

interface LabelSeparatorProps extends Omit<React.ComponentProps<"div">, "children"> {
  children: string;
}

export default function LabelSeparator({ children, className, ...props }: LabelSeparatorProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">{children}</span>
      </div>
    </div>
  );
}
