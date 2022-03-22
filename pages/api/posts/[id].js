import { connectToDatabase } from "../../../util/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const {
    method,
    query: { id },
  } = req;

  if (method === "DELETE") {
    try {
      await db.collection("posts").deleteOne({ _id: new ObjectId(id) });
      res.status(200).json({
        status: "success",
        message: "The post has been deleted!!",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
