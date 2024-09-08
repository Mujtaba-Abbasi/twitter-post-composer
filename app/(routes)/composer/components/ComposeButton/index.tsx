import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { ComposeButtonProps } from "./props";

export function ComposeButton({ className, onClick }: ComposeButtonProps) {
  return (
    <Button
      size="icon"
      className={`bg-gradient rounded-full ${className}`}
      onClick={onClick ?? (() => {})}
      type="button"
    >
      <PlusIcon className="text-white" />
    </Button>
  );
}
