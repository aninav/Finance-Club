import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  // ── Option A: Resend (recommended — free tier is generous) ──────────────
  // Install: npm i resend
  // Docs: https://resend.com/docs
  //
  // const { Resend } = await import('resend')
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.contacts.create({
  //   email,
  //   audienceId: process.env.RESEND_AUDIENCE_ID!,
  // })

  // ── Option B: Mailchimp ─────────────────────────────────────────────────
  // const res = await fetch(
  //   `https://us1.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email_address: email, status: 'subscribed' }),
  //   }
  // )

  // For now, just log and return success
  console.log('Newsletter signup:', email)
  return NextResponse.json({ success: true })
}
