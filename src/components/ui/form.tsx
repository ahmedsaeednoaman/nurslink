import { FormProvider, useFormContext } from "react-hook-form";

export const Form = ({ children }: { children: React.ReactNode }) => {
  const methods = useFormContext();
  return <form>{children}</form>;
};

export const FormField = ({ name, children }: { name: string; children: React.ReactNode }) => {
  return <div className="mb-4">{children}</div>;
};

export const FormItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col">{children}</div>;
};

export const FormLabel = ({ children }: { children: React.ReactNode }) => {
  return <label className="text-sm font-medium text-gray-700">{children}</label>;
};

export const FormControl = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const FormMessage = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <p className="text-sm text-red-600">{message}</p>;
};
