import type { Meta, StoryObj } from "@storybook/react";
import { BizCalendar } from "./BizCalendar";
import { useState } from "react";

const meta = {
  title: "Components/BizCalendar",
  component: BizCalendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BizCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithSelected: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return (
      <BizCalendar mode="single" selected={selected} onSelect={setSelected} />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date[] | undefined>([]);
    return (
      <BizCalendar mode="multiple" selected={selected} onSelect={setSelected} />
    );
  },
};

export const Range: Story = {
  render: () => {
    const [selected, setSelected] = useState<any>();
    return (
      <BizCalendar mode="range" selected={selected} onSelect={setSelected} />
    );
  },
};

export const WithDisabledDates: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();
    const disabledDays = [
      new Date(2024, 0, 15),
      new Date(2024, 0, 20),
      { from: new Date(2024, 0, 10), to: new Date(2024, 0, 12) },
    ];

    return (
      <BizCalendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        disabled={disabledDays}
      />
    );
  },
};
