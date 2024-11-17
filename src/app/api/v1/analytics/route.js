import { connectToDatabase } from "@/lib/db";
import Blog from "@/models/blog.model";

export async function GET(){
    await connectToDatabase();

    const blogsCount = await Blog.aggregate([
        {
            $count: "blogs"
        }
    ]);    

    return new Response(JSON.stringify(blogsCount));
}