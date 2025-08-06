import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function NotesPage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold text-grindgrid-text-primary">My Notes</h1>

      <Card className="bg-grindgrid-card shadow-neumorphic rounded-lg">
        <CardHeader>
          <CardTitle>New Note</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Start typing your notes here..." className="min-h-[200px] bg-grindgrid-bg shadow-neumorphic-inset" />
          <Button className="mt-4 bg-grindgrid-accent text-white shadow-neumorphic-sm hover:bg-grindgrid-accent/90">Save Note</Button>
        </CardContent>
      </Card>

      <Card className="bg-grindgrid-card shadow-neumorphic rounded-lg">
        <CardHeader>
          <CardTitle>All Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="p-2 rounded-md bg-grindgrid-bg shadow-neumorphic-inset">
              <h3 className="font-semibold">React Component Lifecycle</h3>
              <p className="text-sm text-grindgrid-text-secondary truncate">Notes on useEffect, useState, etc.</p>
            </li>
            <li className="p-2 rounded-md bg-grindgrid-bg shadow-neumorphic-inset">
              <h3 className="font-semibold">Python Data Structures</h3>
              <p className="text-sm text-grindgrid-text-secondary truncate">Lists, tuples, dictionaries, sets.</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
