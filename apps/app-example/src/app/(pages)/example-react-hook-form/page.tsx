"use client";
import { ExampleSchemaType } from "@/business/schemas/ExampleSchema";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@bizelements/ui";
import { useMutation } from "@tanstack/react-query";
import { postExample } from "@/lib/api-client/exampleFetch";
import { ApiCreated } from "@/lib/types/api";
import { zodResolver } from "@hookform/resolvers/zod";
import ExampleSchema from "@/business/schemas/ExampleSchema";

export default function ExamplePageReactHookForm() {
  const form = useForm<ExampleSchemaType>({
    resolver: zodResolver(ExampleSchema),
    defaultValues: {
      simpleInput: "",
    },
  });

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
          onClick: () => mutation.mutate(form.getValues()),
        },
      });
    },
  });

  const handleSubmit = (values: ExampleSchemaType) => {
    mutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form
        className="w-full max-w-md mx-auto bg-card border border-border rounded-lg p-6 shadow-sm space-y-6 sm:max-w-lg sm:p-8"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="simpleInput"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Simple Input</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter at least 2 characters"
                  disabled={mutation.isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>This is a simple input field.</FormDescription>

              {mutation.error && (
                <p
                  className="text-sm text-destructive mt-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md"
                  role="alert"
                  aria-live="polite"
                >
                  <strong>Error:</strong> {mutation.error.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <Button type="submit" disabled={mutation.isPending} className="w-full">
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
    </Form>
  );
}
