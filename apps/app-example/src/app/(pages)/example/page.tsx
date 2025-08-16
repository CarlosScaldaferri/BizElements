"use client";
import ExampleSchema, {
  ExampleSchemaType,
} from "@/business/schemas/ExampleSchema";
import { registerExample } from "@/lib/fetches/exampleFetch";
import {
  BizForm,
  BizFormControl,
  BizFormDescription,
  BizFormField,
  BizFormItem,
  BizFormMessage,
  BizInput,
  BizFormLabel,
  BizButton,
} from "@bizelements/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { RegisterExampleSuccessData } from "@/lib/fetches/exampleFetch";

export default function ExamplePage() {
  const form = useForm<ExampleSchemaType>({
    resolver: zodResolver(ExampleSchema),
    defaultValues: {
      simpleImput: "",
    },
  });

  const { mutate, isPending, isError, error, isSuccess } = useMutation<
    RegisterExampleSuccessData,
    Error,
    ExampleSchemaType
  >({
    mutationFn: registerExample,
    onSuccess: (data) => {
      console.log("Registro realizado com sucesso:", data);
      form.reset({ simpleImput: "" });
      // TODO: Adicionar toast de sucesso ou redirecionamento
    },
    onError: (error) => {
      console.error("Erro no registro:", error);
      // TODO: Adicionar toast de erro ou exibir mensagem para o usuário
    },
  });

  // Remove validação dupla - o zodResolver já valida
  function onSubmit(values: ExampleSchemaType) {
    mutate(values);
  }

  return (
    <BizForm {...form}>
      <form
        className="border-2 rounded-2xl p-5 gap-4 border-gray-300 flex flex-col"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <BizFormField
          control={form.control}
          name="simpleImput"
          render={({ field }) => (
            <BizFormItem>
              <BizFormLabel>Simple Input</BizFormLabel>
              <BizFormControl>
                <BizInput placeholder="simple input" {...field} />
              </BizFormControl>
              <BizFormDescription>
                This is a simple input field.
              </BizFormDescription>
              <BizFormMessage></BizFormMessage>
            </BizFormItem>
          )}
        />
        <BizButton type="submit" isLoading={isPending}>
          Submit
        </BizButton>

        {/* Feedback visual para o usuário */}
        {isSuccess && (
          <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            ✅ Registro realizado com sucesso!
          </div>
        )}

        {isError && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            ❌ Erro: {error?.message || "Falha ao realizar registro"}
          </div>
        )}
      </form>
    </BizForm>
  );
}
