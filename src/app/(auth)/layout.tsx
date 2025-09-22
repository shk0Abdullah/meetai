"use client";

import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const { data: session } = authClient.useSession();
  if (session?.user.name) {
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
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Welcome</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {children}

          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-gray-500 text-sm">or continue with</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Shared socials */}
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </Button>
            <Button variant="outline" className="w-full">
              <Mail className="w-4 h-4 mr-2" /> Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
