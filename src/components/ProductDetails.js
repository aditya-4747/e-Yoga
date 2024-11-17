import Image from "next/image"

export default function ProductDetails({ product }){
    
    return (
        <div className="p-6 max-w-5xl mx-auto">

            {/* Product Title and Images */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={500}
                        height={500}
                        className="rounded-lg object-cover"
                    />
                    <div className="flex gap-4 mt-4">
                        {product.images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`Product Image ${index + 1}`}
                            width={100}
                            height={100}
                            className="rounded-lg object-cover"
                        />
                        ))}
                    </div>
                </div>
                <div className="flex-1 mt-20">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p className="text-lg mt-4">{product.description}</p>
                    <p className="text-xl mt-4 font-semibold">Price: ${product.price}</p>
                    <p className="mt-2 text-green-500">
                        Discount: {product.discountPercentage}%
                    </p>
                    <p className="mt-2 text-gray-600">
                        Brand: <span className="font-medium">{product.brand}</span>
                    </p>
                    <p className="mt-2 text-green-600">{product.availabilityStatus}</p>
                    <button className="px-5 py-2 bg-blue-600 my-10 mr-5 hover:bg-blue-800 hover:text-white">Buy Now</button>
                    <button className="px-5 py-2 bg-yellow-400 my-10 hover:text-white">Add to Cart</button>
                </div>
            </div>

            {/* Product Details */}
            <div className="mt-8">
                <h2 className="text-xl font-bold">Product Details</h2>
                <ul className="mt-4 list-disc pl-6">
                    <li>Weight: {product.weight}g</li>
                    <li>
                        Dimensions: {product.dimensions.width}cm x {product.dimensions.height}cm x{" "}
                        {product.dimensions.depth}cm
                    </li>
                    <li>Warranty: {product.warrantyInformation}</li>
                    <li>Shipping Information: {product.shippingInformation}</li>
                    <li>Return Policy: {product.returnPolicy}</li>
                </ul>
            </div>

            {/* Reviews Section */}
            <div className="mt-8">
                <h2 className="text-xl font-bold">Reviews</h2>
                <div className="mt-4 space-y-4">
                    {product.reviews.map((review, index) => (
                        <div
                        key={index}
                        className="border p-4 rounded-lg shadow-sm hover:shadow-md"
                        >
                        <p className="text-sm text-gray-600">
                            By: <span className="font-medium">{review.reviewerName}</span> |{" "}
                            <span className="italic">{review.date.split("T")[0]}</span>
                        </p>
                        <p className="text-sm text-yellow-500">Rating: {review.rating}/5</p>
                        <p className="mt-2">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};