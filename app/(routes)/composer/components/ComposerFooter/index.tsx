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
    <footer className="footer justify-between">
      <ConfirmationAlert
        trigger={
          <Button
            disabled={isDisabled || isLoading}
            className="rounded-xl text-lg"
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
        className="bg-gradient rounded-xl text-lg text-white w-36 border-gradient"
        type="submit"
        disabled={isDisabled || isLoading}
      >
        {isLoading ? <Loader /> : "Post"}
      </Button>
    </footer>
  );
};
