"use server";
import { api } from "@/config/api";
import { ApiResponse, UserData } from "../_types/index";
import { cookies } from "next/headers";
import { z } from "zod";

type Result =
  | {
      data?: UserData | null;
      message?: string;
      token?: string | null;
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
    }
  | undefined;

const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password field must not be empty." }),
});

export default async function LoginAction(
  state: Result,
  formData: FormData
): Promise<Result> {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  const errorMessage = { message: "Invalid login credentials." };

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await api.post<ApiResponse>("/login", validatedFields.data);

    if (res.data) {
      cookies().set("token", res.data.token);
      console.log(res.data.data);
      return {
        data: res.data.data,
        message: res.data.message,
        token: res.data.token,
      };
    }
  } catch (e) {
    return {
      data: null,
      token: null,
      message: e instanceof Error ? e.message : "",
    };
  }
  return {
    data: null,
    message: "",
  };
}
