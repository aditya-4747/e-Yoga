import NewBlog from '@/components/newBlogPage';
import ProductsList from '@/components/ProductsList';
import SocialMediaUpdate from '@/components/SocialMediaUpdate';

export default async function AnalyticsPage(){

    const blogsCount = await (await fetch(`https://e-yoga.vercel.app/api/v1/analytics`)).json();    
    
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

    return (
        <div>
            {/* Analytics Section */}
            <div className="max-w-screen-xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Panel</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Products Count */}
                    <div className="p-6 bg-blue-100 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-blue-800">Total Products</h2>
                        <p className="text-3xl font-bold text-blue-600 mt-2">{analytics?.productsCount}</p>
                    </div>

                    {/* Blog Articles Count */}
                    <div className="p-6 bg-green-100 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-green-800">Total Blog Articles</h2>
                        <p className="text-3xl font-bold text-green-600 mt-2">{analytics?.blogArticlesCount}</p>
                    </div>
                </div>
            </div>

            {/* Social Media Link Update Section */}
            <SocialMediaUpdate />

            <div className="max-w-screen-xl mx-auto p-6">
                <ProductsList />

                {/* Blog Articles */}
                <div className='my-10'>
                    <NewBlog />
                </div>
            </div>
            
        </div>
    );
};
