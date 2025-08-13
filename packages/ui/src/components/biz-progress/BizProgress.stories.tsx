import type { Meta, StoryObj } from "@storybook/react";
import { BizProgress } from "./BizProgress";

const meta = {
  title: "Components/BizProgress",
  component: BizProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof BizProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    className: "w-60",
  },
};

export const Empty: Story = {
  args: {
    value: 0,
    className: "w-60",
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    className: "w-60",
  },
};

export const Quarter: Story = {
  args: {
    value: 25,
    className: "w-60",
  },
};

export const ThreeQuarters: Story = {
  args: {
    value: 75,
    className: "w-60",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-60 space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>67%</span>
      </div>
      <BizProgress value={67} />
    </div>
  ),
};
