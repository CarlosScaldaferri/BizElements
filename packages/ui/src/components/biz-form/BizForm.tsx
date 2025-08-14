import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { BizLabel } from "@/components/biz-label/BizLabel";

const BizForm = FormProvider;

type BizFormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const BizFormFieldContext = React.createContext<BizFormFieldContextValue>(
  {} as BizFormFieldContextValue
);

const BizFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <BizFormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </BizFormFieldContext.Provider>
  );
};

const useBizFormField = () => {
  const fieldContext = React.useContext(BizFormFieldContext);
  const itemContext = React.useContext(BizFormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useBizFormField should be used within <BizFormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type BizFormItemContextValue = {
  id: string;
};

const BizFormItemContext = React.createContext<BizFormItemContextValue>(
  {} as BizFormItemContextValue
);

function BizFormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <BizFormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </BizFormItemContext.Provider>
  );
}

function BizFormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useBizFormField();

  return (
    <BizLabel
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function BizFormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useBizFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

function BizFormDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  const { formDescriptionId } = useBizFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function BizFormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useBizFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}

export {
  useBizFormField,
  BizForm,
  BizFormItem,
  BizFormLabel,
  BizFormControl,
  BizFormDescription,
  BizFormMessage,
  BizFormField,
};
