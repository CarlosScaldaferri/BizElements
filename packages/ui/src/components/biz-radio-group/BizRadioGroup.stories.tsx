import type { Meta, StoryObj } from "@storybook/react";
import { BizRadioGroup, BizRadioGroupItem } from "./BizRadioGroup";
import { BizLabel } from "../biz-label/BizLabel";

const meta = {
  title: "Components/BizRadioGroup",
  component: BizRadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BizRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BizRadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <BizRadioGroupItem value="option1" id="option1" />
        <BizLabel htmlFor="option1">Option 1</BizLabel>
      </div>
      <div className="flex items-center space-x-2">
        <BizRadioGroupItem value="option2" id="option2" />
        <BizLabel htmlFor="option2">Option 2</BizLabel>
      </div>
      <div className="flex items-center space-x-2">
        <BizRadioGroupItem value="option3" id="option3" />
        <BizLabel htmlFor="option3">Option 3</BizLabel>
      </div>
    </BizRadioGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <BizRadioGroup defaultValue="comfortable" className="space-y-3">
      <div className="flex items-center space-x-2">
        <BizRadioGroupItem value="default" id="r1" />
        <BizLabel htmlFor="r1">Default</BizLabel>
      </div>
      <div className="flex items-center space-x-2">
        <BizRadioGroupItem value="comfortable" id="r2" />
        <BizLabel htmlFor="r2">Comfortable</BizLabel>
      </div>
      <div className="flex items-center space-x-2">
        <BizRadioGroupItem value="compact" id="r3" />
        <BizLabel htmlFor="r3">Compact</BizLabel>
      </div>
    </BizRadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <BizRadioGroup defaultValue="card" className="flex space-x-6">
      <div className="flex items-center space-x-2">
        <BizRadioGroupItem value="card" id="card" />
        <BizLabel htmlFor="card">Card</BizLabel>
      </div>
      <div className="flex items-center space-x-2">
        <BizRadioGroupItem value="paypal" id="paypal" />
        <BizLabel htmlFor="paypal">PayPal</BizLabel>
      </div>
      <div className="flex items-center space-x-2">
        <BizRadioGroupItem value="apple" id="apple" />
        <BizLabel htmlFor="apple">Apple</BizLabel>
      </div>
    </BizRadioGroup>
  ),
};
