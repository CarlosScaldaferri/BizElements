"use client";
import { UserRegistrationImageSchemaType } from "@/business/schemas/UserRegistrationImageSchema";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
  Checkbox,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Textarea,
  AvatarPicker,
} from "@bizelements/ui";
import { useMutation } from "@tanstack/react-query";
import { postUserRegistrationImage } from "@/lib/api-client/postUserRegistrationImage";
import { ApiCreated } from "@/lib/types/api";
import { zodResolver } from "@hookform/resolvers/zod";
import UserRegistrationImageSchema from "@/business/schemas/UserRegistrationImageSchema";
import { useState, useRef } from "react";
import { DESIGN_TOKENS } from "@/lib/design-tokens";

export default function UserRegistrationImagePage() {
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<UserRegistrationImageSchemaType>({
    resolver: zodResolver(UserRegistrationImageSchema),
    defaultValues: {
      avatar: undefined,
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      gender: undefined,
      country: "",
      bio: "",
      receiveNewsletter: false,
      receivePromotions: false,
      emailNotifications: true,
      smsNotifications: false,
    },
  });

  const handleReset = () => {
    form.reset({
      avatar: undefined,
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      gender: undefined,
      country: "",
      bio: "",
      receiveNewsletter: false,
      receivePromotions: false,
      emailNotifications: true,
      smsNotifications: false,
    });

    // Limpar o input file manualmente
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    // Limpar o preview da imagem
    setPreviewUrl("");
  };

  const mutation = useMutation<
    ApiCreated,
    Error,
    UserRegistrationImageSchemaType
  >({
    mutationFn: postUserRegistrationImage,
    onSuccess: (data) => {
      handleReset(); // Usar a função de reset customizada
      const createdAt = data?.createdAt ?? "unknown date";
      const id = data?.id ?? "unknown id";
      toast.success(
        <>
          User registered successfully!
          <br />
          Created at: {createdAt}
          <br />
          ID: {id}
        </>
      );
    },
    onError: (error: Error) => {
      toast.error("Failed to register user", {
        description: error.message,
        action: {
          label: "Retry",
          onClick: () => mutation.mutate(form.getValues()),
        },
      });
    },
  });

  const handleImageChange = (file: File | undefined) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl("");
    }
  };

  const handleSubmit = (values: UserRegistrationImageSchemaType) => {
    mutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={DESIGN_TOKENS.spacing.form}
      >
        <Card className="w-full max-w-2xl mx-auto my-12">
          <CardHeader className="border-b">
            <CardTitle className="text-2xl">User Registration</CardTitle>
            <CardDescription>
              Please fill in all the required information to create your
              account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className={DESIGN_TOKENS.spacing.section}>
              <h2 className="text-lg font-semibold">Profile Picture</h2>
              {/* Avatar URL */}
              <FormField
                control={form.control}
                name="avatar"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel>Picture</FormLabel>
                    <FormControl className="flex flex-col items-start">
                      <AvatarPicker
                        id="avatar-upload"
                        file={value as File | undefined}
                        previewUrl={previewUrl}
                        onChange={(f) => {
                          onChange(f);
                          handleImageChange(f ?? undefined);
                        }}
                        disabled={mutation.isPending}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Basic Information */}
            <div className={DESIGN_TOKENS.spacing.section}>
              <h2 className="text-lg font-semibold">Basic Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John"
                          disabled={mutation.isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Doe"
                          disabled={mutation.isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john.doe@example.com"
                        disabled={mutation.isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date of Birth */}
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        disabled={mutation.isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please select your date of birth.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Gender */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <div className="flex h-auto min-h-[2.25rem] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-within:outline-none focus-within:ring-1 focus-within:ring-ring">
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-x-6 p-2"
                          disabled={mutation.isPending}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <label
                              htmlFor="male"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Male
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <label
                              htmlFor="female"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Female
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <label
                              htmlFor="other"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Other
                            </label>
                          </div>
                        </RadioGroup>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Country */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={mutation.isPending}
                        {...field}
                      >
                        <option value="">Select a country</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                        <option value="br">Brazil</option>
                        <option value="jp">Japan</option>
                        <option value="kr">South Korea</option>
                        <option value="in">India</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bio */}
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself..."
                        disabled={mutation.isPending}
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Write a short bio about yourself (10-500 characters).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Preferences */}
            <div className={DESIGN_TOKENS.spacing.section}>
              <h2 className="text-lg font-semibold">Preferences</h2>
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="receiveNewsletter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Receive Newsletter</FormLabel>
                        <FormDescription>
                          Get our weekly newsletter with updates and news.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="receivePromotions"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Receive Promotions</FormLabel>
                        <FormDescription>
                          Get notified about special offers and promotions.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Notifications */}
            <div className="space-y-4 pb-6">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="emailNotifications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>Email Notifications</FormLabel>
                        <FormDescription>
                          Receive notifications via email.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="smsNotifications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>SMS Notifications</FormLabel>
                        <FormDescription>
                          Receive notifications via SMS.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Error Display */}
            {mutation.error && (
              <div
                className="text-sm text-destructive p-3 bg-destructive/10 border border-destructive/20 rounded-md"
                role="alert"
                aria-live="polite"
              >
                <strong>Error:</strong> {mutation.error.message}
              </div>
            )}
          </CardContent>

          <CardFooter className="border-t">
            {/* Submit Button */}

            <Button
              type="submit"
              disabled={mutation.isPending}
              className="w-full md:w-auto"
            >
              {mutation.isPending ? (
                <>
                  <div
                    className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                    aria-hidden="true"
                  />
                  <span id="submit-status">Registering...</span>
                </>
              ) : (
                "Register User"
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
