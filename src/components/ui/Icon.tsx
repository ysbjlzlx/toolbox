import { cn } from "@/lib/utils";
import { icons } from "lucide-react";
import { memo } from "react";

export interface IconProps {
  name: keyof typeof icons;
  className?: string;
  strokeWidth?: number;
  onClick?: () => void;
}

export const Icon = memo(({ name, className, strokeWidth, onClick }: IconProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <span role="img" className="anticon">
      <IconComponent className={cn("h-4 w-4", className)} strokeWidth={strokeWidth || 2.5} onClick={onClick} />
    </span>
  );
});
