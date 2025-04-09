import { toast as sonnerToast } from "sonner";

export const toast = ({
  title,
  description,
  variant = "default",
}: {
  title: string;
  description: string;
  variant?: "default" | "destructive";
}) => {
  if (variant === "destructive") {
    sonnerToast.error(description || title);
  } else {
    sonnerToast.success(description || title);
  }
};
