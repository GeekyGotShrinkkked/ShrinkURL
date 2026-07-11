import { redirect } from "next/navigation";
import clientPromise from "../lib/mongodb";

export default async function Page({ params }) {
  const { url: shortUrl } = await params;
  const client = await clientPromise;
  const db = client.db("shrinkURL");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shortUrl });

  if (doc) {
    redirect(doc.url);
  } else {
    redirect("/");
  }
}
