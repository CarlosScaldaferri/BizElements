"use client";
import { UserRegistrationSchemaType } from "@/business/schemas/UserRegistrationSchema";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Switch,
  Textarea,
} from "@bizelements/ui";
import { useMutation } from "@tanstack/react-query";
import { postUserRegistration } from "@/lib/api-client/postUserRegistration";
import { ApiCreated } from "@/lib/types/api";
import { zodResolver } from "@hookform/resolvers/zod";
import UserRegistrationSchema from "@/business/schemas/UserRegistrationSchema";

export default function UserRegistrationPage() {
  const form = useForm<UserRegistrationSchemaType>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      avatarUrl: "",
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

  const mutation = useMutation<ApiCreated, Error, UserRegistrationSchemaType>({
    mutationFn: postUserRegistration,
    onSuccess: (data) => {
      form.reset();
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

  const handleSubmit = (values: UserRegistrationSchemaType) => {
    mutation.mutate(values);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-card border border-border rounded-lg p-6 shadow-sm space-y-8 sm:p-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">User Registration</h1>
        <p className="text-muted-foreground">
          Please fill in all the required information to create your account.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Avatar URL */}
          <FormField
            control={form.control}
            name="avatarUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Avatar URL (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com/avatar.jpg"
                    disabled={mutation.isPending}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter a URL for your profile picture.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Basic Information */}
          <div className="space-y-4">
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
          </div>

          {/* Date of Birth */}
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" disabled={mutation.isPending} {...field} />
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
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={field.value === "male"}
                        onChange={() => field.onChange("male")}
                        disabled={mutation.isPending}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <label htmlFor="male" className="text-sm font-medium">
                        Male
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={field.value === "female"}
                        onChange={() => field.onChange("female")}
                        disabled={mutation.isPending}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <label htmlFor="female" className="text-sm font-medium">
                        Female
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        checked={field.value === "other"}
                        onChange={() => field.onChange("other")}
                        disabled={mutation.isPending}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <label htmlFor="other" className="text-sm font-medium">
                        Other
                      </label>
                    </div>
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

          {/* Preferences */}
          <div className="space-y-4">
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
          <div className="space-y-4">
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

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={mutation.isPending}
            className="w-full"
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
        </form>
      </Form>
    </div>
  );
}
