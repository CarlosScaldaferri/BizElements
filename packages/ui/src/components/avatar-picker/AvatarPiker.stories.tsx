import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { AvatarPicker, AvatarPickerProps } from "./AvatarPicker";

export default {
  title: "Components/FileUpload",
  component: AvatarPicker,
  args: {
    id: "avatar-upload",
    label: "Upload avatar",
    accept: "image/*",
    disabled: false,
    showPreview: true,
  },
} as Meta<typeof AvatarPicker>;

const Template: StoryFn<typeof AvatarPicker> = (args) => {
  const [file, setFile] = useState<File | undefined | null>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleChange = (f?: File) => {
    console.log("onChange", f);
    setFile(f ?? undefined);
    if (f) setPreviewUrl(URL.createObjectURL(f));
    else setPreviewUrl("");
  };

  const handleRemove = () => {
    console.log("onRemove");
    setFile(undefined);
    setPreviewUrl("");
  };

  return (
    <div style={{ padding: 24 }}>
      <AvatarPicker
        {...(args as AvatarPickerProps)}
        file={file}
        previewUrl={previewUrl}
        onChange={handleChange}
        onRemove={handleRemove}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Profile picture",
};

export const WithPreview = Template.bind({});
WithPreview.args = {
  label: "Profile picture",
  previewUrl: "https://via.placeholder.com/150",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Profile picture (disabled)",
};
