"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
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
        <Button className="text-white">Create User</Button>
      </div>
    </>
  );
}
