import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from 'lucide-react'

export default function SkillsPage() {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-grindgrid-text-primary">My Skills</h1>
        <Button className="bg-grindgrid-accent text-white shadow-neumorphic-sm hover:bg-grindgrid-accent/90">
          <Plus className="mr-2 h-4 w-4" /> Add Skill
        </Button>
      </div>

      <Card className="bg-grindgrid-card shadow-neumorphic rounded-lg">
        <CardHeader>
          <CardTitle>Skills List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-grindgrid-shadow-dark">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-grindgrid-text-secondary uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-grindgrid-text-secondary uppercase tracking-wider">Start Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-grindgrid-text-secondary uppercase tracking-wider">Deadline</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-grindgrid-text-secondary uppercase tracking-wider">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-grindgrid-text-secondary uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-grindgrid-card divide-y divide-grindgrid-shadow-dark">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Web Development</td>
                  <td className="px-6 py-4 whitespace-nowrap">2024-01-01</td>
                  <td className="px-6 py-4 whitespace-nowrap">2025-01-01</td>
                  <td className="px-6 py-4 whitespace-nowrap">75%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button variant="ghost" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Data Science</td>
                  <td className="px-6 py-4 whitespace-nowrap">2024-03-10</td>
                  <td className="px-6 py-4 whitespace-nowrap">2025-03-10</td>
                  <td className="px-6 py-4 whitespace-nowrap">40%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button variant="ghost" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
