"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
export default function Home() {
  const { data: session, isPending, error, refetch } = authClient.useSession();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  if (session) {
    return (
      <>
        <div className="flex flex-col gap-y-4 p-5">
          <p className="font-bold text-2xl mx-auto">
            Logged in as {session.user.name}
          </p>
          <Button
            onClick={() => {
              authClient.signOut();
            }}
          >
            Sign Out
          </Button>
        </div>
      </>
    );
  }
  const onSubmit = () => {
    authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onError: () => {
          window.alert("Something went wrong");
        },
        onSuccess: () => {
          window.alert("Success");
        },
      }
    );
  };
  const onLogin = () => {
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: () => {
          window.alert("Something went wrong");
        },
        onSuccess: () => {
          window.alert("Success");
        },
      }
    );
  };
  return (
    <>
      <div className="gap-y-5">
        <div className="p-4 flex flex-col gap-y-4">
          <Input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="text-white" onClick={onSubmit}>
            Create User
          </Button>
        </div>
        <div className="p-4 flex flex-col gap-y-4">
          <Input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="text-white" onClick={onLogin}>
            Login User
          </Button>
        </div>
      </div>
    </>
  );
}
