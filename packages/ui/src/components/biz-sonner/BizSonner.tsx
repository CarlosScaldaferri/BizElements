import * as React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";
import { cn } from "@/lib/utils";

export interface BizSonnerProps extends ToasterProps {
  className?: string;
}

function BizSonner({ className, ...props }: BizSonnerProps) {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      data-slot="sonner"
      theme={theme as ToasterProps["theme"]}
      className={cn("toaster group", className)}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { BizSonner };
