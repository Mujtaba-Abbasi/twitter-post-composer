"use client";

import { FormProvider } from "react-hook-form";
import {
  ChannelPreview,
  InfoCard,
  AccordionSection,
  Header,
  ComposerFooter,
} from "./components";
import { useData } from "./hooks";

export default function Page() {
  const { methods, onSubmit } = useData();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex min-h-screen flex-col pb-[80px]"
      >
        <Header />
        <div className="flex flex-col lg:flex-row flex-grow">
          <div className="flex flex-col gap-6 flex-grow">
            <InfoCard />
            <AccordionSection />
          </div>
          <ChannelPreview />
        </div>
        <ComposerFooter />
      </form>
    </FormProvider>
  );
}
