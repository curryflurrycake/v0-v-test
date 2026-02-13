import { NextRequest, NextResponse } from 'next/server'

const VALID_USERNAME = process.env.VALID_USERNAME
const VALID_PASSWORD = process.env.VALID_PASSWORD

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ success: false }, { status: 401 })
  }
}
