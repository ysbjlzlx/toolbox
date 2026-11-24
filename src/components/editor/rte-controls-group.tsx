import type { RichTextEditorControlsGroupProps } from "./types";
import { cn } from "./ui/utils";

export const ControlsGroup = ({
  children,
  className,
}: RichTextEditorControlsGroupProps) => (
  <div className={cn("rte-controls-group", className)}>{children}</div>
);
