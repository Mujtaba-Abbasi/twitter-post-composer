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
  const { isLoading, isFormDisabled, methods, onSubmit, resetForm } = useData();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex min-h-screen flex-col pb-[80px]"
      >
        <Header />
        <div className="flex flex-col lg:flex-row flex-grow">
          <div className="flex flex-col gap-6 flex-grow">
            <InfoCard isDisabled={isFormDisabled} resetForm={resetForm} />
            <AccordionSection />
          </div>
          <ChannelPreview />
        </div>
        <ComposerFooter
          isLoading={isLoading}
          isDisabled={isFormDisabled}
          resetForm={resetForm}
        />
      </form>
    </FormProvider>
  );
}
