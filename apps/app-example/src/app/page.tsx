"use client";

import Link from "next/link";
import { Button } from "@bizelements/ui";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">BizElements Demo App</h1>
          <p className="text-muted-foreground text-lg">
            Explore our component library with these example pages:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-border rounded-lg space-y-4">
            <h2 className="text-xl font-semibold">React Hook Form Example</h2>
            <p className="text-muted-foreground text-sm">
              Basic form implementation using React Hook Form with our
              components.
            </p>
            <Link href="/example-react-hook-form">
              <Button className="w-full">View Example</Button>
            </Link>
          </div>

          <div className="p-6 border border-border rounded-lg space-y-4">
            <h2 className="text-xl font-semibold">TanStack Form Example</h2>
            <p className="text-muted-foreground text-sm">
              Advanced form with TanStack Form library integration.
            </p>
            <Link href="/example-tanstack">
              <Button className="w-full">View Example</Button>
            </Link>
          </div>

          <div className="p-6 border border-border rounded-lg space-y-4">
            <h2 className="text-xl font-semibold">User Registration</h2>
            <p className="text-muted-foreground text-sm">
              Complete registration form showcasing Avatar, Calendar, Checkbox,
              Input, RadioGroup, Select, Switch, and Textarea components.
            </p>
            <Link href="/user-registration">
              <Button className="w-full" variant="default">
                View Registration
              </Button>
            </Link>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-muted-foreground">
            Built with Next.js 15, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  );
}
