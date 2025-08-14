import type { Meta, StoryObj } from "@storybook/react";
import { BizAvatar, BizAvatarImage, BizAvatarFallback } from "./BizAvatar";

const meta = {
  title: "Components/BizAvatar",
  component: BizAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BizAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BizAvatar>
      <BizAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <BizAvatarFallback>CN</BizAvatarFallback>
    </BizAvatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <BizAvatar>
      <BizAvatarImage src="https://invalid-url.jpg" alt="@user" />
      <BizAvatarFallback>JD</BizAvatarFallback>
    </BizAvatar>
  ),
};

export const OnlyFallback: Story = {
  render: () => (
    <BizAvatar>
      <BizAvatarFallback>AB</BizAvatarFallback>
    </BizAvatar>
  ),
};

export const CustomSize: Story = {
  render: () => (
    <BizAvatar className="size-16">
      <BizAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <BizAvatarFallback className="text-lg">CN</BizAvatarFallback>
    </BizAvatar>
  ),
};
