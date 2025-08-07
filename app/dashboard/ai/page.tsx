'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { supabase } from "@/lib/supabase-client"

interface ChatMessage {
  id: string
  question: string
  response: string
  created_at: string
}

export default function AIHubPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [quizTopic, setQuizTopic] = useState('')

  const handleSendMessage = async () => {
    if (!currentQuestion.trim() || isLoading) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: currentQuestion }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      setMessages(prev => [...prev, data])
      setCurrentQuestion('')
    } catch (error) {
      console.error('Error sending message:', error)
      // You could add a toast notification here
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold text-grindgrid-text-primary">AI Hub</h1>

      <Card className="bg-grindgrid-card shadow-neumorphic rounded-lg">
        <CardHeader>
          <CardTitle>AI Chat Assistant (Gemini)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 border border-grindgrid-shadow-dark rounded-lg p-4 overflow-y-auto bg-grindgrid-bg shadow-neumorphic-inset mb-4">
            {messages.length === 0 ? (
              <p className="text-grindgrid-text-secondary">Chat messages will appear here...</p>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="space-y-2">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <p className="font-semibold text-blue-800">You:</p>
                      <p className="text-blue-700">{message.question}</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p className="font-semibold text-gray-800">AI:</p>
                      <p className="text-gray-700 whitespace-pre-wrap">{message.response}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <Input 
              placeholder="Ask Gemini anything..." 
              className="flex-1 bg-grindgrid-bg shadow-neumorphic-inset"
              value={currentQuestion}
              onChange={(e) => setCurrentQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <Button 
              className="bg-grindgrid-accent text-white shadow-neumorphic-sm hover:bg-grindgrid-accent/90"
              onClick={handleSendMessage}
              disabled={isLoading || !currentQuestion.trim()}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-grindgrid-card shadow-neumorphic rounded-lg">
          <CardHeader>
            <CardTitle>Generate Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            <Input 
              placeholder="Enter quiz topic (e.g., 'React Hooks')" 
              className="mb-4 bg-grindgrid-bg shadow-neumorphic-inset"
              value={quizTopic}
              onChange={(e) => setQuizTopic(e.target.value)}
            />
            <Button 
              className="w-full bg-grindgrid-accent text-white shadow-neumorphic-sm hover:bg-grindgrid-accent/90"
              onClick={() => {
                if (quizTopic.trim()) {
                  setCurrentQuestion(`Generate a multiple choice quiz about ${quizTopic} with 5 questions`)
                  handleSendMessage()
                }
              }}
              disabled={!quizTopic.trim() || isLoading}
            >
              Generate MCQ Quiz
            </Button>
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
