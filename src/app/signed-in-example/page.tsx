import { getUserId } from "@/server/server-only/getUserId";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="container flex flex-col gap-5 p-5">
      <SignedOut>
        <p>Please sign in to continue</p>
      </SignedOut>
      <SignedIn>
        <Suspense fallback={<p>Loading...</p>}>
          <SignedInContent />
        </Suspense>
      </SignedIn>
    </div>
  );
}

const SignedInContent = async () => {
  const user = await auth();
  if (!user?.userId) {
    throw new Error("User not authenticated");
  }
  const clerkClientResult = await clerkClient();
  const fullUserData = await clerkClientResult.users.getUser(user.userId);

  // Server only function called in a server component
  const userId = await getUserId();

  return (
    <div>
      Some signed in content: {fullUserData.firstName} {fullUserData.lastName}
      <br />
      Server only function: {userId}
    </div>
  );
};
