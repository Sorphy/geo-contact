import { z } from "zod";

export const addContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
    .trim(),
  phoneNumber: z
    .string()
    .regex(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits long")
    .max(15, "Phone number must be at most 15 digits long"),
  email: z.string().email("Please enter a valid email address").trim(),
  addresses: z
    .array(z.object({ value: z.string().min(1, "Address cannot be empty") }))
    .min(1, "At least one address is required")
    .max(5, "Cannot have more than 5 addresses"),
  longitude: z
    .number()
    .min(-180, "Longitude must be between -180 and 180")
    .max(180, "Longitude must be between -180 and 180"),
  latitude: z
    .number()
    .min(-90, "Latitude must be between -90 and 90")
    .max(90, "Latitude must be between -90 and 90"),
});

export type TAddContactSchema = z.infer<typeof addContactSchema>;
