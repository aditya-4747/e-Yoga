import Benefits from '@/components/Benefits';
import Image from 'next/image';
import { Raleway } from 'next/font/google';

const raleway = Raleway({weight: '600', subsets: ['latin']});

export default function HomePage() {

	// Dummy Products Data
  	const products = [
		{
			id: 1,
			name: "Smart Yoga Mat",
			description: "Experience real-time feedback and tracking with the Smart Yoga Mat.",
			image: "/mat.jpg",
		},
		{
			id: 2,
			name: "Posture Corrector",
			description: "Improve your alignment and posture with the wearable Posture Corrector.",
			image: "/pose.jpg",
		},
		{
			id: 3,
			name: "Yoga Tracker",
			description: "Monitor your flexibility and progress over time with the Yoga Tracker.",
			image: "/yoga.jpg",
		}
  	];
  
  	return (
		<div>

			{/* Hero Section */}
			<section id='home' className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(bg-image.jpeg)'}}>
				<div className='opacity-60 bg-black h-[80vh] w-full z-1 absolute'></div>
				<div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6 z-10">
					<h1 className={`text-4xl md:text-6xl font-bold mb-4 ${raleway.className}`}>
					Transform your Yoga into Smart Yoga
					</h1>
					
					<p className="text-lg md:text-2xl mb-8">
					Discover smart yoga products designed to elevate your practice and enhance your well-being.
					</p>

					<a href="/products" className="mt-10 bg-blue-600 hover:bg-blue-700 text-white py-4 px-12 rounded-lg shadow-lg font-bold transition text-2xl">
					Shop Now
					</a>
				</div>
			</section>

			{/* Benefits Section */}
			<Benefits />

			{/* Products Example Section */}
			<section id='products' className="py-10 bg-gray-100">
				<div className="container mx-auto px-6">
					<div className='h-20 flex justify-between items-center'>
						<h2 className="text-3xl font-bold text-gray-800">Explore Our Smart Yoga Products</h2>
						<a href='/products' className='text-black flex gap-2 items-center'>Show all<img src='right-arrow.svg' className='h-3' /></a>
					</div>
				
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{products.map((product) => (
						<div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
							<Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-60 object-cover" />
							
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
								<p className="text-gray-600 mt-2">{product.description}</p>
								
								<a href={`/products/${product.id}`} className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
									View Product
								</a>
							</div>
						</div>
						))}
					</div>
				</div>
			</section>

		</div>
  	);
}
