import { NextResponse } from "next/server";

export async function POST(req) {

  const { imageURL, roomType, designType, additionalReq } = await req.json();
  
  // COnvert the image to AI Image

  
  // Convert output URL to BASE64 Image
  // Save Base64 to firebas
  // Save all to database


  return NextResponse.json({ result: "Hello" });
}
