import type { Meta, StoryObj } from "@storybook/react";
import { BizSwitch } from "./BizSwitch";
import { BizLabel } from "../biz-label/BizLabel";

const meta = {
  title: "Components/BizSwitch",
  component: BizSwitch,
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
} satisfies Meta<typeof BizSwitch>;

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
      <BizSwitch id="airplane-mode" />
      <BizLabel htmlFor="airplane-mode">Airplane mode</BizLabel>
    </div>
  ),
};

export const Settings: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <BizLabel htmlFor="notifications" className="text-base">
          Push Notifications
        </BizLabel>
        <BizSwitch id="notifications" />
      </div>
      <div className="flex items-center justify-between">
        <BizLabel htmlFor="marketing" className="text-base">
          Marketing emails
        </BizLabel>
        <BizSwitch id="marketing" />
      </div>
      <div className="flex items-center justify-between">
        <BizLabel htmlFor="social" className="text-base">
          Social interactions
        </BizLabel>
        <BizSwitch id="social" defaultChecked />
      </div>
    </div>
  ),
};
