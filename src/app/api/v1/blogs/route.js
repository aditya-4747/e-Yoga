import { connectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";
import Blog from "@/models/blog.model";

// Connect to MongoDB
await connectToDatabase();

export async function GET() {
    // Fetch all blogs from the database
    try {
        const blogs = await Blog.find({});
        return new NextResponse(JSON.stringify(blogs));
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return new Response(
            { error: "Failed to fetch blogs" }, { status: 500 }
        );
    }
}

export async function POST(req) {
    try {        
        const body = await req.json();        

        // Validate required fields
        const { title, content } = body;
        if (!title || !content) {
            return new Response(
                { error: "Title and content are required" },
                { status: 400 }
            );
        }

        // Create and save a new blog
        const newBlog = new Blog({
            title,
            content,
            createdAt: new Date(),
        });
        const savedBlog = await newBlog.save();

        return new Response(savedBlog, { status: 201 });
    } catch (error) {
        console.error("Error adding blog:", error);
        return new Response(
            { error: "Failed to add blog" }, { status: 500 }
        );
    }
}
