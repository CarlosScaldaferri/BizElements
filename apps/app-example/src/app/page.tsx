"use client";
import { BizForm, BizInput } from "@bizelements/ui";
import { useForm } from "react-hook-form";

export default function Home() {
  const form = useForm();

  return (
    <BizForm {...form}>
      <BizInput type="text" placeholder="Seu nome" />
    </BizForm>
  );
}
