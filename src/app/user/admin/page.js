import NewBlog from '@/components/newBlogPage';
import React from 'react';
import { PlusCircle } from 'lucide-react';
import Image from 'next/image';


export default async function AnalyticsPage(){

    const blogsCount = await fetch(`http://localhost:3000/api/v1/analytics`).then(res => res.json());    

    const analytics = {
        "productsCount": 5,
        "blogArticlesCount": blogsCount[0].blogs
    }

    if (!analytics) {
        return (
            <div className="text-center text-red-600">
                Failed to load analytics. Please try again later.
            </div>
        );
    }

    const response = await (await fetch(`https://dummyjson.com/products?limit=5&skip=40`)).json();
    const products = response.products;

    return (
        <div>
            {/* Analytics Section */}
            <div className="max-w-screen-xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Panel</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Products Count */}
                    <div className="p-6 bg-blue-100 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-blue-800">Total Products</h2>
                        <p className="text-3xl font-bold text-blue-600 mt-2">{analytics.productsCount}</p>
                    </div>

                    {/* Blog Articles Count */}
                    <div className="p-6 bg-green-100 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-green-800">Total Blog Articles</h2>
                        <p className="text-3xl font-bold text-green-600 mt-2">{analytics.blogArticlesCount}</p>
                    </div>
                </div>
            </div>

            {/* Social Media Link Update Section */}
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

            <div className="max-w-screen-xl mx-auto p-6">
                {/* Products */}
                <div>
                    <div className='flex justify-between items-center'>
                        <h1 className="text-2xl font-bold text-gray-800 mb-10">Your Products</h1>
                        <button className='flex gap-1 items-center'><PlusCircle />Add Product</button>
                    </div>

                    <div className="container mx-auto p-6">
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                            <li
                                key={product.id}
                                className="border rounded-lg shadow p-4 hover:shadow-lg transition"
                            >
                                {/* Product Image */}
                                <div className="relative h-48">
                                    <Image
                                        src={product.thumbnail}
                                        alt={product.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-lg"
                                    />
                                </div>
                                {/* Product Info */}
                                <div className="mt-4">
                                    <h2 className="text-xl font-semibold">{product.title}</h2>
                                    <p className="text-gray-600 mt-2">{product.description}</p>
                                    <p className="text-blue-600 font-bold mt-2">
                                        ${product.price.toFixed(2)}
                                    </p>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Blog Articles */}
                <div className='my-10'>
                    <NewBlog />
                </div>
            </div>
            
        </div>
    );
};
