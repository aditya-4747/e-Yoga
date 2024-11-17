import { connectToDatabase } from "@/lib/db";
import { ObjectId } from "mongodb";
import Blog from "@/models/blog.model";

export async function GET(req, { params }) {
    try {
        // Extract the `id` from the dynamic route
        const { id } = await params; 
        await connectToDatabase();

        const blog = await Blog.findOne({ _id: new ObjectId(id) });

        if (!blog) {
            return new Response(JSON.stringify({ error: "Blog not found" }), {
                status: 404,
            });
        }

        return new Response(JSON.stringify(blog), { status: 200 });
    } catch (error) {
        console.error("Error fetching blog:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
        });
    }
}
