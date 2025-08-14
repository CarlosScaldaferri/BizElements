import type { Meta, StoryObj } from "@storybook/react";
import {
  BizCard,
  BizCardHeader,
  BizCardFooter,
  BizCardTitle,
  BizCardAction,
  BizCardDescription,
  BizCardContent,
} from "./BizCard";
import { BizButton } from "../biz-button/BizButton";

const meta = {
  title: "Components/BizCard",
  component: BizCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BizCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BizCard className="w-96">
      <BizCardHeader>
        <BizCardTitle>Card Title</BizCardTitle>
        <BizCardDescription>Card description goes here</BizCardDescription>
      </BizCardHeader>
      <BizCardContent>
        <p>This is the main content of the card.</p>
      </BizCardContent>
    </BizCard>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <BizCard className="w-96">
      <BizCardHeader>
        <BizCardTitle>Card with Footer</BizCardTitle>
        <BizCardDescription>This card has a footer section</BizCardDescription>
      </BizCardHeader>
      <BizCardContent>
        <p>Card content goes here.</p>
      </BizCardContent>
      <BizCardFooter>
        <BizButton>Action</BizButton>
      </BizCardFooter>
    </BizCard>
  ),
};

export const WithAction: Story = {
  render: () => (
    <BizCard className="w-96">
      <BizCardHeader>
        <BizCardTitle>Card with Action</BizCardTitle>
        <BizCardDescription>
          This card has an action button in the header
        </BizCardDescription>
        <BizCardAction>
          <BizButton size="sm">Edit</BizButton>
        </BizCardAction>
      </BizCardHeader>
      <BizCardContent>
        <p>Card content with action button in header.</p>
      </BizCardContent>
    </BizCard>
  ),
};

export const Complete: Story = {
  render: () => (
    <BizCard className="w-96">
      <BizCardHeader>
        <BizCardTitle>Complete Card</BizCardTitle>
        <BizCardDescription>Card with all components</BizCardDescription>
        <BizCardAction>
          <BizButton size="sm" variant="outline">
            Edit
          </BizButton>
        </BizCardAction>
      </BizCardHeader>
      <BizCardContent>
        <p>This card demonstrates all available components working together.</p>
      </BizCardContent>
      <BizCardFooter className="justify-between">
        <BizButton variant="outline">Cancel</BizButton>
        <BizButton>Save</BizButton>
      </BizCardFooter>
    </BizCard>
  ),
};
