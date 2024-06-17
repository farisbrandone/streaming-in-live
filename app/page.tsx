import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className="flex flex-col gap-y-4">
        <h1>Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      <Button size="lg" variant="custum">
        Only authenticate users can see this
      </Button>
    </main>
  );
}
