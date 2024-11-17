import ProductDetails from "@/components/ProductDetails";

export default async function Product({ params }){
    const {id} = await params;
    const product = await fetch(`https://dummyjson.com/products/${id}`).then(res => res.json());
    
    return <ProductDetails product={product} />
};