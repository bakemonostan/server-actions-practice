"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import LoginAction from "../_actions/loginAction";

const clientAction = async (formData: FormData) => {
  const { data, message } = await LoginAction(formData);
  console.log(message, data);
};

export default function LoginPage() {
  return (
    <div className="max-w-xl mx-auto p-7">
      <h1 className="text-4xl  text-center font-bold">Login</h1>
      <form className="space-y-3 pt-5" action={clientAction} method="POST">
        <div className="space-y-3">
          <Label htmlFor="email" className="font-semibold">
            Email
          </Label>
          <Input id="email" type="email" name="email" autoComplete="email" />
        </div>
        <div className="space-y-3">
          <Label htmlFor="password" className="font-semibold">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </div>
        <div className="text-center pt-5">
          <Button type="submit" className="w-1/3">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
