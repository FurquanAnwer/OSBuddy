// src/app/(dashboard)/notifications/page.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function NotificationSettings() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Notification Settings</h1>

      <Card className="bg-zinc-900 border-zinc-800 max-w-xl">
        <CardHeader>
          <CardTitle className="text-purple-400">WhatsApp Alerts</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input
            className="bg-zinc-800 border-zinc-700"
            placeholder="WhatsApp Number"
          />
        </CardContent>
      </Card>
    </div>
  );
}
