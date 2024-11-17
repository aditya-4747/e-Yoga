

export default async function BlogPage(){

    const response = await fetch('http://localhost:3000/api/v1/blogs', { cache: "no-store" });
    const blogs = await response.json();    
    
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Blogs</h1>

            {/* Blog List */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Available Blogs</h2>
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div key={blog._id} className="border rounded p-4 mb-4 shadow-sm bg-gray-50 max-h-40">
                            <a href={`/blog/${blog._id}`}><h3 className="text-xl font-bold hover:underline w-fit">{blog.title}</h3></a>
                            <p className="text-sm text-gray-500 mb-2">
                                Published on {new Date(blog.createdAt).toLocaleDateString()}
                            </p>
                            <p>{blog.content.length > 100 ? (blog.content.slice(0,150) + "...") : blog.content}</p>
                        </div>
                    ))
                ) : (
                    <p>No blogs available.</p>
                )}
            </section>
        </div>
    );
};
