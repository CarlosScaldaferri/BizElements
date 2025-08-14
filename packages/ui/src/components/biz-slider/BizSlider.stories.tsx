import type { Meta, StoryObj } from "@storybook/react";
import { BizSlider } from "./BizSlider";
import { useState } from "react";

const meta = {
  title: "Components/BizSlider",
  component: BizSlider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    max: {
      control: { type: "number" },
    },
    min: {
      control: { type: "number" },
    },
    step: {
      control: { type: "number" },
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof BizSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    min: 0,
    step: 1,
    className: "w-60",
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    min: 0,
    step: 1,
    className: "w-60",
  },
};

export const WithStep: Story = {
  args: {
    defaultValue: [20],
    max: 100,
    min: 0,
    step: 10,
    className: "w-60",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    min: 0,
    step: 1,
    disabled: true,
    className: "w-60",
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState([50]);
    return (
      <div className="w-60 space-y-4">
        <div className="flex justify-between text-sm">
          <span>Volume</span>
          <span>{value[0]}%</span>
        </div>
        <BizSlider
          value={value}
          onValueChange={setValue}
          max={100}
          min={0}
          step={1}
        />
      </div>
    );
  },
};
