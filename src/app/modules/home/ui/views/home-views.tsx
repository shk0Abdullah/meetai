"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
function HomeViews() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  return (
    <>
      {isPending ? (
        <div>Loading ...</div>
      ) : (
        <>
          <div className="flex flex-col gap-y-4 p-5">
            <p className="font-bold text-2xl mx-auto">
              Logged in as {session?.user.name}
            </p>
            <Button
              onClick={async () => {
                await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push("/sign-in");
                    },
                  },
                });
              }}
            >
              Sign Out
            </Button>
          </div>
        </>
      )}
    </>
  );
}
export default HomeViews;
