"use client";
import { ExampleSchemaType } from "@/business/schemas/ExampleSchema";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { Button, Input } from "@bizelements/ui";
import { useMutation } from "@tanstack/react-query";
import { postExample } from "@/lib/api-client/postExample";
import { ApiCreated } from "@/lib/types/api";
import ExampleSchema from "@/business/schemas/ExampleSchema";

export default function ExamplePageTanstack() {
  const mutation = useMutation<ApiCreated, Error, ExampleSchemaType>({
    mutationFn: postExample,
    onSuccess: (data) => {
      form.reset();
      const createdAt = data?.createdAt ?? "unknown date";
      const id = data?.id ?? "unknown id";
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
          onClick: () =>
            mutation.mutate(form.state.values as ExampleSchemaType),
        },
      });
    },
  });

  const form = useForm({
    defaultValues: {
      simpleInput: "",
    } as ExampleSchemaType,
    onSubmit: async ({ value }) => {
      // Validação com Zod antes do submit
      try {
        const validatedData = ExampleSchema.parse(value);
        mutation.mutate(validatedData);
      } catch (error) {
        toast.error("Validation failed");
      }
    },
  });

  return (
    <form
      className="w-full max-w-md mx-auto bg-card border border-border rounded-lg p-6 shadow-sm space-y-6 sm:max-w-lg sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Field
        name="simpleInput"
        validators={{
          onChange: ({ value }) => {
            const result = ExampleSchema.shape.simpleInput.safeParse(value);
            return result.success ? undefined : result.error.errors[0]?.message;
          },
        }}
      >
        {(field) => (
          <div className="space-y-2">
            <label
              htmlFor={field.name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Simple Input
            </label>
            <div>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter at least 2 characters"
                disabled={mutation.isPending}
              />
            </div>
            {field.state.meta.errors && field.state.meta.errors.length > 0 && (
              <div className="text-sm text-destructive mt-1">
                {field.state.meta.errors[0]}
              </div>
            )}
            <p className="text-sm text-muted-foreground">
              This is a simple input field.
            </p>

            {mutation.error && (
              <p
                className="text-sm text-destructive mt-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md"
                role="alert"
                aria-live="polite"
              >
                <strong>Error:</strong> {mutation.error.message}
              </p>
            )}
          </div>
        )}
      </form.Field>

      <Button
        type="submit"
        disabled={mutation.isPending || !form.state.canSubmit}
        className="w-full"
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
      </Button>
    </form>
  );
}
