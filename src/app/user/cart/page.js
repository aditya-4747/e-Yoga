

export default async function CartPage() {
    // const cartItems = await fetch("http://localhost:3000/api/cart").then((res) =>
    //     res.json()
    // );
  
    const cartItems = [
        {
            "id": 1,
            "title": 'Water',
            "price": 0.99,
            "quantity": 2
        },
        {
            "id": 2,
            "title": 'Glass',
            "price": 3.99,
            "quantity": 4
        }
    ]
    
    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                            <th className="border px-4 py-2 text-left">Product</th>
                            <th className="border px-4 py-2">Price</th>
                            <th className="border px-4 py-2">Quantity</th>
                            <th className="border px-4 py-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="border px-4 py-2 flex items-center">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-16 h-16 mr-4 rounded-lg"
                                />
                                <span>{item.title}</span>
                                </td>
                                <td className="border px-4 py-2 text-center">${item.price.toFixed(2)}</td>
                                <td className="border px-4 py-2 text-center">{item.quantity}</td>
                                <td className="border px-4 py-2 text-center">
                                ${(item.price * item.quantity).toFixed(2)}
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-6 flex justify-between items-center">
                        <p className="text-xl font-semibold">
                            Total: <span className="text-blue-600">${calculateTotal().toFixed(2)}</span>
                        </p>
                        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
  