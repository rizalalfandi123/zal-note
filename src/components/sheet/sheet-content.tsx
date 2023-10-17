import React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/helpers";
import { SheetOverlay } from "./sheet-overlay";

const sheetVariants = cva(
  [
    "fixed z-50 gap-4 bg-background p-4 shadow-lg transition ease-in-out",
    "data-[state=open]:duration-500 data-[state=open]:animate-in",
    "data-[state=closed]:animate-out data-[state=closed]:duration-300",
  ],
  {
    variants: {
      side: {
        top: [
          "inset-x-0 top-0 border-b",
          "data-[state=closed]:slide-out-to-top",
          "data-[state=open]:slide-in-from-top",
        ],
        bottom: [
          "inset-x-0 bottom-0 border-t",
          "data-[state=closed]:slide-out-to-bottom",
          "data-[state=open]:slide-in-from-bottom",
        ],
        left: [
          "inset-y-0 left-0 h-full w-3/4 border-r",
          "data-[state=open]:slide-in-from-left",
          "data-[state=closed]:slide-out-to-left",
          "sm:max-w-sm",
        ],
        right: [
          "inset-y-0 right-0 h-full w-3/4  border-l",
          "data-[state=closed]:slide-out-to-right",
          "data-[state=open]:slide-in-from-right",
          "sm:max-w-sm",
        ],
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  withCloseButton?: boolean;
}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = "right", className, children, withCloseButton = true, ...props }, ref) => (
    <SheetPrimitive.Portal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}

        {withCloseButton && (
          <SheetPrimitive.Close
            className={cn(
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity",
              "hover:opacity-100",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "disabled:pointer-events-none",
              "data-[state=open]:bg-secondary"
            )}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  )
);

SheetContent.displayName = SheetPrimitive.Content.displayName;

export { SheetContent };
