import { Loader } from "@/app/elements";
import { Button } from "@/components/ui/button";
import { ComposerFooterProps } from "./props";
import { ConfirmationAlert } from "@/app/elements";

export const ComposerFooter = ({
  isLoading,
  isDisabled,
  resetForm,
}: ComposerFooterProps) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full flex items-center justify-between px-12 min-h-[80px] border-t border-gray-600 bg-secondary">
      <ConfirmationAlert
        trigger={
          <Button
            disabled={isDisabled || isLoading}
            className="rounded-xl text-lg"
            size="lg"
            variant="outline"
            type="button"
          >
            Cancel
          </Button>
        }
        description="Are you sure you want to clear out the form?"
        onConfirm={resetForm}
      />

      <Button
        className="bg-gradient rounded-xl text-lg text-white w-36"
        size="lg"
        type="submit"
        disabled={isDisabled || isLoading}
      >
        {isLoading ? <Loader /> : "Post"}
      </Button>
    </footer>
  );
};
