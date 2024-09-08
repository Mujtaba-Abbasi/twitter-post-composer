import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccordionInput = ({
  title,
  description,
  inputElement,
  error,
}: {
  title: string;
  description: string;
  inputElement: React.ReactNode;
  error?: string;
}) => {
  return (
    <AccordionItem
      value={title}
      className="border mb-8 border-gray-700 rounded-xl overflow-hidden"
    >
      <AccordionTrigger className="p-4">
        <p className="text-lg md:text-2xl">{title}</p>
      </AccordionTrigger>
      <AccordionContent className="p-4 rounded-b-lg flex flex-col gap-6">
        <p className="text-base">{description}</p>
        {inputElement}
        <p className="text-sm mt-2 text-red-600">{error}</p>
      </AccordionContent>
    </AccordionItem>
  );
};
