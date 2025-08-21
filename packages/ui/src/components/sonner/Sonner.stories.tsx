import type { Meta, StoryObj } from "@storybook/react";
import { Sonner } from "./Sonner";
import { Button } from "../button/Button";
import { toast } from "sonner";

const meta = {
  title: "Components/Sonner",
  component: Sonner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
    },
    expand: {
      control: "boolean",
    },
    richColors: {
      control: "boolean",
    },
    closeButton: {
      control: "boolean",
    },
    duration: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Sonner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4">
      <Sonner {...args} />
      <div className="flex gap-2 flex-wrap">
        <Button
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Toast
        </Button>
      </div>
    </div>
  ),
};

export const Success: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4">
      <Sonner {...args} />
      <div className="flex gap-2 flex-wrap">
        <Button
          onClick={() => toast.success("Successfully saved!")}
          variant="default"
        >
          Success Toast
        </Button>
      </div>
    </div>
  ),
};

export const Error: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4">
      <Sonner {...args} />
      <div className="flex gap-2 flex-wrap">
        <Button
          onClick={() => toast.error("Something went wrong!")}
          variant="destructive"
        >
          Error Toast
        </Button>
      </div>
    </div>
  ),
};

export const Warning: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4">
      <Sonner {...args} />
      <div className="flex gap-2 flex-wrap">
        <Button
          onClick={() => toast.warning("Please check your input!")}
          variant="outline"
        >
          Warning Toast
        </Button>
      </div>
    </div>
  ),
};

export const Info: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4">
      <Sonner {...args} />
      <div className="flex gap-2 flex-wrap">
        <Button
          onClick={() => toast.info("New update available!")}
          variant="secondary"
        >
          Info Toast
        </Button>
      </div>
    </div>
  ),
};

export const Loading: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4">
      <Sonner {...args} />
      <div className="flex gap-2 flex-wrap">
        <Button
          onClick={() => {
            const promise = () =>
              new Promise((resolve) => setTimeout(resolve, 2000));

            toast.promise(promise, {
              loading: "Loading...",
              success: (data) => {
                return `Successfully completed!`;
              },
              error: "Error occurred!",
            });
          }}
          variant="ghost"
        >
          Loading Toast
        </Button>
      </div>
    </div>
  ),
};

export const CustomPosition: Story = {
  args: {
    position: "top-right",
  },
  render: (args) => (
    <div className="space-y-4">
      <Sonner {...args} />
      <div className="flex gap-2 flex-wrap">
        <Button onClick={() => toast("This toast appears in top-right!")}>
          Show Toast (Top Right)
        </Button>
      </div>
    </div>
  ),
};

export const WithAction: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4">
      <Sonner {...args} />
      <div className="flex gap-2 flex-wrap">
        <Button
          onClick={() =>
            toast("File uploaded successfully", {
              description: "Your document has been processed",
              action: {
                label: "View",
                onClick: () => console.log("View clicked"),
              },
            })
          }
        >
          Toast with Action
        </Button>
      </div>
    </div>
  ),
};

export const RichColors: Story = {
  args: {
    richColors: true,
  },
  render: (args) => (
    <div className="space-y-4">
      <Sonner {...args} />
      <div className="flex gap-2 flex-wrap">
        <Button onClick={() => toast.success("Rich colors enabled!")}>
          Rich Colors Toast
        </Button>
      </div>
    </div>
  ),
};

export const Combination: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4">
      <Sonner {...args} />
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={() => toast("Default toast")} size="sm">
          Default
        </Button>
        <Button
          onClick={() => toast.success("Success toast")}
          variant="default"
          size="sm"
        >
          Success
        </Button>
        <Button
          onClick={() => toast.error("Error toast")}
          variant="destructive"
          size="sm"
        >
          Error
        </Button>
        <Button
          onClick={() => toast.warning("Warning toast")}
          variant="outline"
          size="sm"
        >
          Warning
        </Button>
      </div>
    </div>
  ),
};
