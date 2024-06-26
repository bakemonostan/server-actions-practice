"use server";
import { api } from "@/config/api";
import { ApiResponse, UserData } from "../_types/index";
import { cookies } from "next/headers";

interface Result {
  data: UserData | null;
  message?: string;
  token?: string | null;
}

export default async function LoginAction(formdata: FormData): Promise<Result> {
  const email = formdata.get("email");
  const password = formdata.get("password");
  if (!email || !password) {
    return {
      data: null,
      message: "All fields are required",
      token: null,
    };
  }

  try {
    const res = await api.post<ApiResponse>("/login", {
      email,
      password,
    });

    if (res.data) {
      cookies().set("token", res.data.token);
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
