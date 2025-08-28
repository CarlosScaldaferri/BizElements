import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Button } from "../button/Button";
import { Trash2, Upload } from "lucide-react";

export type AvatarPickerProps = {
  id?: string;
  label?: string;
  accept?: string;
  file: File | undefined | null;
  previewUrl?: string | undefined;
  disabled?: boolean;
  onChange: (file?: File) => void;
  onRemove?: () => void;
  className?: string;
  showPreview?: boolean;
};

const AvatarPicker = forwardRef<HTMLDivElement, AvatarPickerProps>(
  (
    {
      id = "file-upload",
      label = "Upload file",
      accept = "image/*",
      file,
      previewUrl,
      disabled = false,
      onChange,
      onRemove,
      className,
      showPreview = true,
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(inputRef.current);
      } else if (ref && "current" in ref) {
        ref.current = inputRef.current;
      }
    }, [ref]);

    const [localPreview, setLocalPreview] = useState<string | "">(
      previewUrl ?? ""
    );

    useEffect(() => {
      if (previewUrl) setLocalPreview(previewUrl);
      else if (!file) setLocalPreview("");
    }, [previewUrl]);

    const handleClick = () => {
      if (disabled) return;
      inputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0];
      onChange(f);
      if (f) {
        const url = URL.createObjectURL(f);
      } else {
        setLocalPreview("");
      }
    };

    const handleRemove = () => {
      if (inputRef.current) {
        inputRef.current.value = "";
        onChange(undefined);
        setLocalPreview("");
        if (onRemove) onRemove();
      }
    };

    return (
      <div className={className}>
        <label className="block text-sm font-medium mb-2">{label}</label>

        <div className="space-y-3 w-fit flex flex-col items-center">
          <div className="w-32 h-32 bg-muted rounded-full overflow-hidden flex justify-center items-center">
            {showPreview && localPreview ? (
              <img
                src={localPreview}
                alt="preview"
                className="w-32 h-32 object-cover rounded-full"
              />
            ) : (
              <div className="text-sm text-muted-foreground text-center">
                No image
                <br />
                selected
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="file"
              id={id}
              accept={accept}
              className="hidden"
              ref={(el) => {
                inputRef.current = el;
              }}
              onChange={handleFileChange}
              aria-hidden
              disabled={disabled}
            />

            <Button
              type="button"
              variant="outline"
              onClick={handleClick}
              disabled={disabled}
              className="flex items-center"
              aria-label={file ? "Change image" : "Select image"}
            >
              <Upload className="w-4 h-4 mr-2" />
              {file ? "Change" : "Select"}
            </Button>

            {localPreview && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleRemove}
                aria-label="Remove image"
              >
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
);
export { AvatarPicker };
