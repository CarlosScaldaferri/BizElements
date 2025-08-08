import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button2";

const meta = {
  title: "ButtonsButton",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Component description",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // argTypes configuration
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => {
    return <Button />;
  },
};

export const RedBackground: Story = {
  render: () => {
    return <Button text="Perigo" backgroundColor="red" />;
  },
};
