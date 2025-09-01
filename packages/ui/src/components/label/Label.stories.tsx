import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label Text",
  },
};

export const WithHtmlFor: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email-input">Email Address</Label>
      <input
        id="email-input"
        type="email"
        placeholder="Enter your email"
        className="px-3 py-2 border rounded"
      />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <Label>
      Full Name <span className="text-red-500">*</span>
    </Label>
  ),
};

export const CustomStyling: Story = {
  args: {
    className: "text-blue-600 font-bold",
    children: "Styled Label",
  },
};
