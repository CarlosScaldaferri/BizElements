"use client";
import ExampleSchema, {
  ExampleSchemaType,
} from "@/business/schemas/ExampleSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  BizButton,
  BizForm,
  BizFormControl,
  BizFormDescription,
  BizFormField,
  BizFormItem,
  BizFormLabel,
  BizFormMessage,
  BizInput,
} from "@bizelements/ui";
import { useMutation } from "@tanstack/react-query";
import { registerExampleFetch } from "@/lib/api-client/exampleFetch";
import { ApiResponse, TApiCreated } from "@/lib/types/api";

export default function ExamplePage() {
  const form = useForm<ExampleSchemaType>({
    resolver: zodResolver(ExampleSchema),
    defaultValues: {
      simpleInput: "",
    },
  });

  const mutation = useMutation<
    ApiResponse<TApiCreated>,
    Error,
    ExampleSchemaType
  >({
    mutationFn: registerExampleFetch,
    onSuccess: (data) => {
      form.reset();
      const createdAt = data.data?.createdAt ?? "unknown date";
      const id = data.data?.id ?? "unknown id";
      toast.success(
        <>
          Form submitted successfully!
          <br />
          Created at: {createdAt}
          <br />
          id: {id}
        </>
      );
    },
    onError: (error: Error) => {
      toast.error("Failed to submit form", {
        description: error.message,
        action: {
          label: "Retry",
          onClick: () => mutation.mutate(form.getValues()),
        },
      });
    },
  });

  const handleSubmit = (values: ExampleSchemaType) => {
    mutation.mutate(values);
  };

  return (
    <BizForm {...form}>
      <form
        className="w-full max-w-md mx-auto bg-card border border-border rounded-lg p-6 shadow-sm space-y-6 sm:max-w-lg sm:p-8"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <BizFormField
          control={form.control}
          name="simpleInput"
          render={({ field }) => (
            <BizFormItem>
              <BizFormLabel>Simple Input</BizFormLabel>
              <BizFormControl>
                <BizInput
                  placeholder="Enter at least 2 characters"
                  disabled={mutation.isPending}
                  {...field}
                />
              </BizFormControl>
              <BizFormMessage />
              <BizFormDescription>
                This is a simple input field.
              </BizFormDescription>

              {mutation.error && (
                <p
                  className="text-sm text-destructive mt-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md"
                  role="alert"
                  aria-live="polite"
                >
                  <strong>Error:</strong> {mutation.error.message}
                </p>
              )}
            </BizFormItem>
          )}
        />

        <BizButton
          type="submit"
          disabled={mutation.isPending}
          className="w-full"
          aria-describedby={mutation.isPending ? "submit-status" : undefined}
        >
          {mutation.isPending ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                aria-hidden="true"
              />
              <span id="submit-status">Submitting...</span>
            </>
          ) : (
            "Submit"
          )}
        </BizButton>
      </form>
    </BizForm>
  );
}
