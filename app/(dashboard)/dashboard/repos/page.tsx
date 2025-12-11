// src/app/(dashboard)/repos/page.tsx

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function RepoSettings() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Tracked Repos</h1>

      <Card className="bg-zinc-900 border-zinc-800 max-w-xl">
        <CardHeader>
          <CardTitle className="text-purple-400">GitHub Repositories</CardTitle>
        </CardHeader>

        <CardContent>
          <textarea
            className="w-full h-48 rounded-xl bg-zinc-800 border border-zinc-700 text-white p-3"
            placeholder="twentyhq/twenty&#10;calcom/cal.com&#10;openstatusHQ/openstatus"
          />
        </CardContent>
      </Card>
    </div>
  );
}
