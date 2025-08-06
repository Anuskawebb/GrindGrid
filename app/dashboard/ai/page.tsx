import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AIHubPage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold text-grindgrid-text-primary">AI Hub</h1>

      <Card className="bg-grindgrid-card shadow-neumorphic rounded-lg">
        <CardHeader>
          <CardTitle>AI Chat Assistant (Gemini)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 border border-grindgrid-shadow-dark rounded-lg p-4 overflow-y-auto bg-grindgrid-bg shadow-neumorphic-inset">
            <p className="text-grindgrid-text-secondary">Chat messages will appear here...</p>
          </div>
          <div className="flex gap-2 mt-4">
            <Input placeholder="Ask Gemini anything..." className="flex-1 bg-grindgrid-bg shadow-neumorphic-inset" />
            <Button className="bg-grindgrid-accent text-white shadow-neumorphic-sm hover:bg-grindgrid-accent/90">Send</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-grindgrid-card shadow-neumorphic rounded-lg">
          <CardHeader>
            <CardTitle>Generate Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Enter quiz topic (e.g., 'React Hooks')" className="mb-4 bg-grindgrid-bg shadow-neumorphic-inset" />
            <Button className="w-full bg-grindgrid-accent text-white shadow-neumorphic-sm hover:bg-grindgrid-accent/90">Generate MCQ Quiz</Button>
            <div className="mt-4 p-4 border border-grindgrid-shadow-dark rounded-lg bg-grindgrid-bg shadow-neumorphic-inset">
              <p className="text-grindgrid-text-secondary">Quiz questions will appear here...</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-grindgrid-card shadow-neumorphic rounded-lg">
          <CardHeader>
            <CardTitle>Learning Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-grindgrid-accent text-white shadow-neumorphic-sm hover:bg-grindgrid-accent/90">Get Suggestions</Button>
            <div className="mt-4 p-4 border border-grindgrid-shadow-dark rounded-lg bg-grindgrid-bg shadow-neumorphic-inset">
              <p className="text-grindgrid-text-secondary">"Based on your progress, you should focus on advanced CSS animations today."</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
