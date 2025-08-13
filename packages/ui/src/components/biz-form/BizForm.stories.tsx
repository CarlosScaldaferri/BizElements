import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import {
  BizForm,
  BizFormControl,
  BizFormDescription,
  BizFormField,
  BizFormItem,
  BizFormLabel,
  BizFormMessage,
} from "./BizForm";
import { BizInput } from "../biz-input/BizInput";
import { BizButton } from "../biz-button/BizButton";

const FormExample = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  return (
    <div className="w-96 space-y-6">
      <BizForm {...form}>
        <form
          onSubmit={form.handleSubmit((data) => console.log(data))}
          className="space-y-4"
        >
          <BizFormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <BizFormItem>
                <BizFormLabel>Username</BizFormLabel>
                <BizFormControl>
                  <BizInput placeholder="Enter username" {...field} />
                </BizFormControl>
                <BizFormDescription>
                  This is your public display name.
                </BizFormDescription>
                <BizFormMessage />
              </BizFormItem>
            )}
          />
          <BizFormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <BizFormItem>
                <BizFormLabel>Email</BizFormLabel>
                <BizFormControl>
                  <BizInput type="email" placeholder="Enter email" {...field} />
                </BizFormControl>
                <BizFormMessage />
              </BizFormItem>
            )}
          />
          <BizButton type="submit">Submit</BizButton>
        </form>
      </BizForm>
    </div>
  );
};

const meta = {
  title: "Components/BizForm",
  component: FormExample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValidation: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        username: "",
        email: "",
      },
    });

    return (
      <div className="w-96 space-y-6">
        <BizForm {...form}>
          <form
            onSubmit={form.handleSubmit((data) => console.log(data))}
            className="space-y-4"
          >
            <BizFormField
              control={form.control}
              name="username"
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <BizFormItem>
                  <BizFormLabel>Username</BizFormLabel>
                  <BizFormControl>
                    <BizInput placeholder="Enter username" {...field} />
                  </BizFormControl>
                  <BizFormMessage />
                </BizFormItem>
              )}
            />
            <BizFormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <BizFormItem>
                  <BizFormLabel>Email</BizFormLabel>
                  <BizFormControl>
                    <BizInput
                      type="email"
                      placeholder="Enter email"
                      {...field}
                    />
                  </BizFormControl>
                  <BizFormMessage />
                </BizFormItem>
              )}
            />
            <BizButton type="submit">Submit</BizButton>
          </form>
        </BizForm>
      </div>
    );
  },
};
