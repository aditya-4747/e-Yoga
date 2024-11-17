
export default function NewBlog(){

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Create a New Blog</h2>
            <form action='/api/v1/blogs' method='post' className="space-y-4">
                <div>
                    <label htmlFor="title" className="block font-medium">Title</label>
                    <input
                    type="text"
                    id="title"
                    className="border rounded w-full p-2"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block font-medium">Content</label>
                    <textarea
                    id="content"
                    className="border rounded w-full p-2"
                    rows="5"
                    required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
        </section>
    )
}