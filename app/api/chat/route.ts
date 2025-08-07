import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { generateResponse } from '@/lib/gemini'

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json()

    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: 'Question is required and must be a string' },
        { status: 400 }
      )
    }

    // Get the authenticated user
    const supabase = await createSupabaseServerClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Generate AI response
    const aiResponse = await generateResponse(question)

    // Save conversation to database
    const { data, error } = await supabase
      .from('conversations')
      .insert({
        user_id: user.id,
        question,
        response: aiResponse,
      })
      .select()
      .single()

    if (error) {
      console.error('Error saving conversation:', error)
      return NextResponse.json(
        { error: 'Failed to save conversation' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      question,
      response: aiResponse,
      id: data.id,
      created_at: data.created_at,
    })
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}