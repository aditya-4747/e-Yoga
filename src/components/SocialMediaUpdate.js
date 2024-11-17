


export default function SocialMediaUpdate(){
    return (
        <div className='max-w-screen-xl mx-auto p-6'>
            <h1 className="text-2xl font-bold text-gray-800 mb-10">Update Social Media Links</h1>
            <div className="w-full mx-auto mt-10 p-6 bg-gray-100 shadow rounded">

                <form className="space-y-4">
                    {/* Instagram */}
                    <div>
                        <label htmlFor="instagram" className="block text-sm font-medium">
                            Instagram Profile Link
                        </label>
                        <input
                            type="url"
                            id="instagram"
                            name="instagram"
                            placeholder="https://instagram.com/your-profile"
                            className="w-full p-2 border rounded mt-1"
                        />
                    </div>

                    {/* Twitter */}
                    <div>
                        <label htmlFor="twitter" className="block text-sm font-medium">
                            Twitter Profile Link
                        </label>
                        <input
                            type="url"
                            id="twitter"
                            name="twitter"
                            placeholder="https://twitter.com/your-profile"
                            className="w-full p-2 border rounded mt-1"
                        />
                    </div>

                    {/* Facebook */}
                    <div>
                        <label htmlFor="facebook" className="block text-sm font-medium">
                            Facebook Profile Link
                        </label>
                        <input
                            type="url"
                            id="facebook"
                            name="facebook"
                            placeholder="https://facebook.com/your-profile"
                            className="w-full p-2 border rounded mt-1"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
                    >
                    Save Links
                    </button>
                </form>
            </div>
        </div>
    )
}