import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  //const data = await fetch("https://api.unsplash.com/search/photos?&client_id=HN-H6e-8x17-j6S7HPJZdyjMwlItv5XfXdqzHt5rAT0&per_page=1").then((d)=>d);
  const data = await fetch("https://unsplash.com/napi/photos?page=40&per_page=100").then((d)=>d);
  const quoteResponse = await data.json();

  //console.log("this is data",typeof Object.values(quoteResponse).length);
console.log("this is data",Object.values(quoteResponse)[29]);
  return NextResponse.json({ error: 'Internal Server Error test', data: quoteResponse }, { status: 500 })
}