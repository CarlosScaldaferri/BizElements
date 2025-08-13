import type { Meta, StoryObj } from "@storybook/react";
import { BizCheckbox } from "./BizCheckbox";
import { BizLabel } from "../biz-label/BizLabel";

const meta = {
  title: "Components/BizCheckbox",
  component: BizCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof BizCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <BizCheckbox id="terms" />
      <BizLabel htmlFor="terms">Accept terms and conditions</BizLabel>
    </div>
  ),
};

export const WithLongLabel: Story = {
  render: () => (
    <div className="flex items-start space-x-2 max-w-sm">
      <BizCheckbox id="newsletter" className="mt-0.5" />
      <BizLabel htmlFor="newsletter" className="text-sm leading-relaxed">
        I would like to receive marketing emails about new products, features,
        and promotions.
      </BizLabel>
    </div>
  ),
};
