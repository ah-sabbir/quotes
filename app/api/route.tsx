import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const data = await fetch("https://api.unsplash.com/search/photos?query=nature%20landscape&client_id=HN-H6e-8x17-j6S7HPJZdyjMwlItv5XfXdqzHt5rAT0&per_page=1", { next: { revalidate: false | 0 | number } })
  //const quoteResponse = awit data.json()
console.log("this is data",data);
  return NextResponse.json({ error: 'Internal Server Error test', data: data }, { status: 500 })
}