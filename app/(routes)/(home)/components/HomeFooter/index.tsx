import { Button } from "@/components/ui/button";

export const HomeFooter = () => {
  return (
    <footer className="footer justify-center md:justify-end">
      <div className="flex gap-4 md:px-96">
        <Button
          className="rounded-xl text-lg text-white w-36"
          type="submit"
          variant="outline"
        >
          Previous
        </Button>
        <Button
          className="bg-gradient rounded-xl text-lg text-white w-36 border-gradient"
          type="submit"
        >
          Continue
        </Button>
      </div>
    </footer>
  );
};
