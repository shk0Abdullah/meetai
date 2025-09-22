import HomeViews from "./modules/home/ui/views/home-views";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

// This is a server component
export default async function Page() {
  // Get the session on the server
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return <HomeViews />;
}
