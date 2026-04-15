import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const RESEND_KEY = process.env.RESEND_API_KEY
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

  if (!RESEND_KEY || !AUDIENCE_ID) {
    // No keys set — log and return success silently (dev mode)
    console.log('Newsletter signup (Resend not configured):', email)
    return NextResponse.json({ success: true })
  }

  try {
    const res = await fetch('https://api.resend.com/audiences/' + AUDIENCE_ID + '/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      // 422 means contact already exists — treat as success
      if (res.status === 422) {
        return NextResponse.json({ success: true })
      }
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
