import { z } from "zod";

const UserRegistrationSchema = z.object({
  // Avatar
  avatarUrl: z.string().url().optional().or(z.literal("")),

  // Basic Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),

  // Date of Birth
  dateOfBirth: z.string().min(1, "Please select your date of birth"),

  // Gender (Radio Group)
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select your gender",
  }),

  // Country (Select)
  country: z.string().min(1, "Please select your country"),

  // Bio (Textarea)
  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters")
    .max(500, "Bio must not exceed 500 characters"),

  // Preferences (Checkboxes)
  receiveNewsletter: z.boolean(),
  receivePromotions: z.boolean(),

  // Notifications (Switch)
  emailNotifications: z.boolean(),
  smsNotifications: z.boolean(),
});

export type UserRegistrationSchemaType = z.infer<typeof UserRegistrationSchema>;

export default UserRegistrationSchema;
