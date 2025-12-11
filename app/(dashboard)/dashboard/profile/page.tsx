// src/app/(dashboard)/profile/page.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ProfileSettings() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Profile Settings</h1>

      <Card className="bg-zinc-900 border-zinc-800 max-w-xl">
        <CardHeader>
          <CardTitle className="text-purple-400">Your Profile</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input className="bg-zinc-800 border-zinc-700" placeholder="Your Name" />
          <Input className="bg-zinc-800 border-zinc-700" placeholder="Email" />
          <Input className="bg-zinc-800 border-zinc-700" placeholder="WhatsApp Number" />
          <Input className="bg-zinc-800 border-zinc-700" placeholder="GitHub Username" />
        </CardContent>
      </Card>
    </div>
  );
}
