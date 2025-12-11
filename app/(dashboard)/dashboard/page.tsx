// src/app/(dashboard)/page.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Daily Summary</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-purple-400">Activity Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-400">Today's GitHub issue activity from your tracked repos:</p>
            <ul className="mt-4 list-disc list-inside text-zinc-300">
              <li>No relevant issues yet</li>
              <li>Repos monitored: 0</li>
              <li>Last scan: Pending…</li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
