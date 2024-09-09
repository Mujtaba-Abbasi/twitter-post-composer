import { ReactNode } from "react";

export type ConfirmationAlertProps = {
  trigger: ReactNode;
  description: string;
  onConfirm: () => void;
};
