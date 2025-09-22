"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
const SignUpViews = () => {
  // const { data: session } = authClient.useSession();
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // if (session?.user.name) {
  //   return (
  //     <>
  //       <div className="flex flex-col gap-y-4 p-5">
  //         <p className="font-bold text-2xl mx-auto">
  //           Logged in as {session.user.name}
  //         </p>
  //         <Button
  //           onClick={() => {
  //             authClient.signOut();
  //           }}
  //         >
  //           Sign Out
  //         </Button>
  //       </div>
  //     </>
  //   );
  // }

  const onSubmit = () => {
    setPending(true);
    authClient.signUp.email(
      {
        email,
        password,
        name,
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
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
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
          Create Account
        </Button>
      </form>
    </>
  );
};

export default SignUpViews;
