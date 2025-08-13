import type { Meta, StoryObj } from "@storybook/react";
import { BizLabel } from "./BizLabel";

const meta = {
  title: "Components/BizLabel",
  component: BizLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BizLabel>;

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
      <BizLabel htmlFor="email-input">Email Address</BizLabel>
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
    <BizLabel>
      Full Name <span className="text-red-500">*</span>
    </BizLabel>
  ),
};

export const CustomStyling: Story = {
  args: {
    className: "text-blue-600 font-bold",
    children: "Styled Label",
  },
};
