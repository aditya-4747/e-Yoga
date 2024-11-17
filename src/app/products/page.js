import Image from "next/image";

const ProductPage = async () => {
    const response = await (await fetch(`https://dummyjson.com/products?limit=15&skip=40`)).json();
    const products = response.products;

    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Smart Yoga Products</h2>

                {products.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <Image src={product.thumbnail} alt={product.title} width={400} height={300} className="w-full h-60 object-cover" />
                            
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                                    <p className="text-gray-600 mt-2">{product.description}</p>
                                    <p className="text-blue-600 font-bold mt-2">${product.price}</p>
                                
                                    <a href={`/products/${product.id}`} className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                                    View Product
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No products available at the moment.</p>
                )}
            </div>
        </section>
    )
};

export default ProductPage;