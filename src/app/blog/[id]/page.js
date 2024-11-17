import { Funnel_Display } from "next/font/google";
import { Poppins } from "next/font/google";

// Function to fetch data from server using id
async function fetchBlogPost(id) {
    const res = await fetch(`http://localhost:3000/api/v1/blogs/${id}`, { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to fetch the blog post");
    }
    return res.json();
}

const funnel = Funnel_Display({
    weight: ['400'],
    subsets: ['latin']
})
const poppins = Poppins({
    weight: ['400'],
    subsets: ['latin']
})

export default async function BlogPostPage({ params }) {
    // Extract blog ID from the URL
    const { id } = await params; 
    let blogPost;

    try {
        // Fetch the blog post using the ID
        blogPost = await fetchBlogPost(id); 
    } catch (error) {
        return (
        <div className="p-6">
            <h2 className="text-xl font-bold text-red-600">Error</h2>
            <p>Unable to fetch the blog post. Please try again later.</p>
        </div>
        );
    }

    return (
        <div className="p-6 my-10 mx-28">
            <h1 className={`text-3xl font-bold mb-4 ${funnel.className}`}>{blogPost.title}</h1>
            <p className={`text-gray-700 mx-20 ${poppins.className}`}>{blogPost.content}</p>
        </div>
    );
}
