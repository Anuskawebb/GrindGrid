import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TasksPage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold text-grindgrid-text-primary">My Tasks</h1>

      <Card className="bg-grindgrid-card shadow-neumorphic rounded-lg">
        <CardHeader>
          <CardTitle>To-Do List</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center justify-between p-2 rounded-md bg-grindgrid-bg shadow-neumorphic-inset">
              <span>Complete React Router section (Web Dev)</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-grindgrid-text-secondary">Due: Aug 15</span>
                <input type="checkbox" className="form-checkbox h-5 w-5 text-grindgrid-accent rounded" />
              </div>
            </li>
            <li className="flex items-center justify-between p-2 rounded-md bg-grindgrid-bg shadow-neumorphic-inset">
              <span>Read "Python for Data Analysis" Chapter 3 (Data Science)</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-grindgrid-text-secondary">Due: Aug 18</span>
                <input type="checkbox" className="form-checkbox h-5 w-5 text-grindgrid-accent rounded" />
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
