import type { Meta, StoryObj } from "@storybook/react";
import {
  BizSelect,
  BizSelectContent,
  BizSelectItem,
  BizSelectTrigger,
  BizSelectValue,
} from "./BizSelect";

const meta = {
  title: "Components/BizSelect",
  component: BizSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BizSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BizSelect>
      <BizSelectTrigger className="w-[180px]">
        <BizSelectValue placeholder="Select a fruit" />
      </BizSelectTrigger>
      <BizSelectContent>
        <BizSelectItem value="apple">Apple</BizSelectItem>
        <BizSelectItem value="banana">Banana</BizSelectItem>
        <BizSelectItem value="blueberry">Blueberry</BizSelectItem>
        <BizSelectItem value="grapes">Grapes</BizSelectItem>
        <BizSelectItem value="pineapple">Pineapple</BizSelectItem>
      </BizSelectContent>
    </BizSelect>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <BizSelect defaultValue="banana">
      <BizSelectTrigger className="w-[180px]">
        <BizSelectValue placeholder="Select a fruit" />
      </BizSelectTrigger>
      <BizSelectContent>
        <BizSelectItem value="apple">Apple</BizSelectItem>
        <BizSelectItem value="banana">Banana</BizSelectItem>
        <BizSelectItem value="blueberry">Blueberry</BizSelectItem>
        <BizSelectItem value="grapes">Grapes</BizSelectItem>
        <BizSelectItem value="pineapple">Pineapple</BizSelectItem>
      </BizSelectContent>
    </BizSelect>
  ),
};

export const Disabled: Story = {
  render: () => (
    <BizSelect disabled>
      <BizSelectTrigger className="w-[180px]">
        <BizSelectValue placeholder="Select a fruit" />
      </BizSelectTrigger>
      <BizSelectContent>
        <BizSelectItem value="apple">Apple</BizSelectItem>
        <BizSelectItem value="banana">Banana</BizSelectItem>
        <BizSelectItem value="blueberry">Blueberry</BizSelectItem>
      </BizSelectContent>
    </BizSelect>
  ),
};
