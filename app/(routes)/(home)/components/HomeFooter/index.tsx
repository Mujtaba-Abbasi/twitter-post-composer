import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const HomeFooter = () => {
  return (
    <footer className="footer justify-center md:justify-end">
      <div className="flex gap-4 md:px-96">
        <Button
          className="rounded-xl text-lg text-white w-36 flex gap-2"
          variant="outline"
        >
          <ArrowLeft className="w-6 h-5" />
          <span>Previous</span>
        </Button>
        <Button className="bg-gradient rounded-xl flex gap-2 text-lg text-white w-36 border-gradient">
          <span>Continue</span> <ArrowRight className="w-6 h-5" />
        </Button>
      </div>
    </footer>
  );
};
