import { PlusCircle } from 'lucide-react';

export default async function ProductsList(){

    const response = await (await fetch(`https://dummyjson.com/products?limit=5&skip=40`)).json();
    const products = response.products;

    if(!products.length){
        return (
            <div className="text-center text-red-600">
                Failed to load products. Please try again later.
            </div>
        );
    }

    return (
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
                        <div className="relative h-48 flex justify-center">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="rounded-t-lg h-full"
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
    )
}