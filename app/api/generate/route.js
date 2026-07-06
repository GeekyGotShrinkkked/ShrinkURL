import clientPromise from "@/app/lib/mongodb"


export async function GET() {

    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("shrinkURL")
    const collection = db.collection("url") 

    // check if the short url exist

    const doc = await collection.findOne({shortUrl: body.shortUrl}) 
    if(doc){
        return Response.json({ success: true, error: false, message: 'URL Already Exists' })

    }

    const result = await collection.insertOne({
        url: body.url,
        shortUrl:body.shortUrl
    })


  return Response.json({ success: true, error: false, message: 'URL Generated Successfully' })
}