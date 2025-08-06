import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function OverviewPage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold text-grindgrid-text-primary">Welcome back, Learner!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-grindgrid-card shadow-neumorphic rounded-lg">
          <CardHeader>
            <CardTitle>Web Dev Basics Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={75} className="w-full h-3 bg-grindgrid-shadow-dark" />
            <p className="text-sm text-grindgrid-text-secondary mt-2">75% Completed</p>
          </CardContent>
        </Card>

        <Card className="bg-grindgrid-card shadow-neumorphic rounded-lg">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-grindgrid-text-primary">
              <li><span className="font-medium">React Hooks:</span> Aug 15, 2025</li>
              <li><span className="font-medium">SQL Joins:</span> Aug 20, 2025</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-grindgrid-card shadow-neumorphic rounded-lg">
          <CardHeader>
            <CardTitle>AI Suggestion of the Day</CardTitle>
          </CardHeader>
          <CardContent className="text-grindgrid-text-secondary">
            "Based on your progress in Web Dev Basics, consider reviewing asynchronous JavaScript concepts today."
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
