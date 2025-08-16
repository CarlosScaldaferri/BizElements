-- CreateTable
CREATE TABLE "public"."Example" (
    "id" TEXT NOT NULL,
    "bizAvatarUrl" TEXT,
    "bizButtonLabel" TEXT,
    "bizCalendarDate" TIMESTAMP(3),
    "bizCardContent" TEXT,
    "bizCheckboxChecked" BOOLEAN,
    "bizFormData" JSONB,
    "bizInputValue" TEXT,
    "bizLabelText" TEXT,
    "bizPopoverContent" TEXT,
    "bizProgressValue" INTEGER,
    "bizRadioGroupValue" TEXT,
    "bizSelectValue" TEXT,
    "bizSliderValue" INTEGER,
    "bizSwitchChecked" BOOLEAN,
    "bizTextareaValue" TEXT,
    "bizTooltipContent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);
