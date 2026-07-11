import clientPromise from "@/app/lib/mongodb";

export async function POST(request) {
  const body = await request.json();

  if (!body?.url || !body?.shorturl) {
    return Response.json(
      { success: false, error: true, message: "URL and short link text are required" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("shrinkURL");
  const collection = db.collection("url");

  // check if the short url already exists
  const doc = await collection.findOne({ shortUrl: body.shorturl });
  if (doc) {
    return Response.json(
      { success: false, error: true, message: "That short link is already taken" },
      { status: 409 }
    );
  }

  await collection.insertOne({
    url: body.url,
    shortUrl: body.shorturl,
  });

  return Response.json({ success: true, error: false, message: "URL generated successfully" });
}
