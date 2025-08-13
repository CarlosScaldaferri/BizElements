import type { Meta, StoryObj } from "@storybook/react";
import { BizPopover, BizPopoverTrigger, BizPopoverContent } from "./BizPopover";
import { BizButton } from "../biz-button/BizButton";

const meta = {
  title: "Components/BizPopover",
  component: BizPopover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BizPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BizPopover>
      <BizPopoverTrigger asChild>
        <BizButton variant="outline">Open popover</BizButton>
      </BizPopoverTrigger>
      <BizPopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Popover Title</h4>
          <p className="text-sm text-muted-foreground">
            This is a popover content area with some text.
          </p>
        </div>
      </BizPopoverContent>
    </BizPopover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <BizPopover>
      <BizPopoverTrigger asChild>
        <BizButton>Settings</BizButton>
      </BizPopoverTrigger>
      <BizPopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width">Width</label>
              <input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8 px-2 border rounded"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="maxWidth">Max. width</label>
              <input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8 px-2 border rounded"
              />
            </div>
          </div>
        </div>
      </BizPopoverContent>
    </BizPopover>
  ),
};
