import { Loader } from "@/app/elements";
import { Button } from "@/components/ui/button";

export const ComposerFooter = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full flex items-center justify-between px-12 min-h-[80px] border-t border-gray-600 bg-secondary">
      <Button
        disabled={isLoading}
        className="rounded-xl text-lg"
        size="lg"
        variant="outline"
      >
        Cancel
      </Button>
      <Button
        className="bg-gradient rounded-xl text-lg text-white w-36"
        size="lg"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : "Post"}
      </Button>
    </footer>
  );
};
