import type { Meta, StoryObj } from "@storybook/react";
import {
  BizTooltip,
  BizTooltipContent,
  BizTooltipProvider,
  BizTooltipTrigger,
} from "./BizTooltip";
import { BizButton } from "../biz-button/BizButton";

const meta = {
  title: "Components/BizTooltip",
  component: BizTooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BizTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BizTooltipProvider>
      <BizTooltip>
        <BizTooltipTrigger asChild>
          <BizButton variant="outline">Hover me</BizButton>
        </BizTooltipTrigger>
        <BizTooltipContent>
          <p>This is a tooltip</p>
        </BizTooltipContent>
      </BizTooltip>
    </BizTooltipProvider>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <BizTooltipProvider>
      <BizTooltip>
        <BizTooltipTrigger asChild>
          <BizButton>Hover for info</BizButton>
        </BizTooltipTrigger>
        <BizTooltipContent>
          <p>Add to library</p>
        </BizTooltipContent>
      </BizTooltip>
    </BizTooltipProvider>
  ),
};

export const LongText: Story = {
  render: () => (
    <BizTooltipProvider>
      <BizTooltip>
        <BizTooltipTrigger asChild>
          <BizButton variant="outline">Long tooltip</BizButton>
        </BizTooltipTrigger>
        <BizTooltipContent className="max-w-xs">
          <p>
            This is a longer tooltip with more detailed information that wraps
            to multiple lines when needed.
          </p>
        </BizTooltipContent>
      </BizTooltip>
    </BizTooltipProvider>
  ),
};

export const OnIcon: Story = {
  render: () => (
    <BizTooltipProvider>
      <BizTooltip>
        <BizTooltipTrigger asChild>
          <BizButton size="icon" variant="outline">
            ?
          </BizButton>
        </BizTooltipTrigger>
        <BizTooltipContent>
          <p>Help information</p>
        </BizTooltipContent>
      </BizTooltip>
    </BizTooltipProvider>
  ),
};

export const MultipleTooltips: Story = {
  render: () => (
    <BizTooltipProvider>
      <div className="flex space-x-2">
        <BizTooltip>
          <BizTooltipTrigger asChild>
            <BizButton variant="outline">Save</BizButton>
          </BizTooltipTrigger>
          <BizTooltipContent>
            <p>Save your changes</p>
          </BizTooltipContent>
        </BizTooltip>

        <BizTooltip>
          <BizTooltipTrigger asChild>
            <BizButton variant="outline">Cancel</BizButton>
          </BizTooltipTrigger>
          <BizTooltipContent>
            <p>Discard changes</p>
          </BizTooltipContent>
        </BizTooltip>

        <BizTooltip>
          <BizTooltipTrigger asChild>
            <BizButton variant="outline">Delete</BizButton>
          </BizTooltipTrigger>
          <BizTooltipContent>
            <p>Permanently delete item</p>
          </BizTooltipContent>
        </BizTooltip>
      </div>
    </BizTooltipProvider>
  ),
};
