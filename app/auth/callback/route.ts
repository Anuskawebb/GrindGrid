import { createSupabaseServerClient } from '@/lib/supabaseServer'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    // createSupabaseServerClient is async — we await it:
    const supabase = await createSupabaseServerClient()
    await supabase.auth.exchangeCodeForSession(code)
  }

  // Redirect to dashboard after magic link / OAuth redirect
  return NextResponse.redirect(requestUrl.origin + '/dashboard')
}
