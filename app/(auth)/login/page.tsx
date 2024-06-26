"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import LoginAction from "../_actions/loginAction";
import { useFormState, useFormStatus } from "react-dom";

export default function LoginPage() {
  const [state, action] = useFormState(LoginAction, undefined);
  return (
    <div className="max-w-xl mx-auto p-7">
      <h1 className="text-4xl  text-center font-bold">Login</h1>
      <form className="space-y-3 pt-5" action={action} method="POST">
        <div className="space-y-3">
          <Label htmlFor="email" className="font-semibold">
            Email
          </Label>
          <Input id="email" type="email" name="email" autoComplete="email" />
          {state?.errors?.email && (
            <p className="text-sm text-red-500">{state.errors.email}</p>
          )}
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
          {state?.errors?.password && (
            <p className="text-sm text-red-500">{state.errors.password}</p>
          )}
        </div>
        <div className="text-center pt-5">
          <LoginButton />
        </div>
      </form>
    </div>
  );
}

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} type="submit" className="mt-4 w-full">
      {pending ? "Submitting..." : "Sign in"}
    </Button>
  );
}