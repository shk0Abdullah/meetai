"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
function SignInView() {
  // const { data: session } = authClient.useSession();
  const [pending, setPending] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    setPending(true);
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: () => {
          setPending(false);
          window.alert("Something went wrong");
        },
        onSuccess: () => {
          setPending(false);
          window.alert("Success");
        },
      }
    );
  };

  return (
    <>
      <form className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          disabled={pending}
          className="w-full"
          type="button"
          onClick={onSubmit}
        >
          Sign In
        </Button>
      </form>
    </>
  );
}

export default SignInView;
