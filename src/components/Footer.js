import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Delius_Swash_Caps } from 'next/font/google';

const delius = Delius_Swash_Caps({weight: ['400'], subsets: ['latin']})

export default function Footer(){

    return (
        <section id='footer'>
            <footer className="bg-cyan-600 text-gray-300 py-10">
				<div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
					
					<div className="flex flex-col items-start">
						<h2 className={`text-2xl font-bold text-white mb-4 ${delius.className}`}>e-Yoga</h2>
						<p className="text-gray-300 mb-4">
							Discover innovative yoga products that enhance your practice with real-time feedback and personalized guidance.
						</p>
						<div className="flex space-x-4">
							<a href="#" className="hover:text-white">
							<FaFacebookF />
							</a>
							<a href="#" className="hover:text-white">
							<FaTwitter />
							</a>
							<a href="#" className="hover:text-white">
							<FaInstagram />
							</a>
							<a href="#" className="hover:text-white">
							<FaYoutube />
							</a>
						</div>
					</div>

					{/* Navigation Links */}
					<div>
						<h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li><a href="/" className="hover:text-white">Home</a></li>
							<li><a href="/products" className="hover:text-white">Shop</a></li>
							<li><a href="/blog" className="hover:text-white">Blog</a></li>
							<li><a href="/" className="hover:text-white">Contact Us</a></li>
							<li><a href="/" className="hover:text-white">FAQs</a></li>
						</ul>
					</div>

					{/* Newsletter Signup */}
					<div id='contact'>
						<h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
						<p className="text-white opacity-70 mb-4">Join our newsletter for exclusive deals and updates on the latest in smart yoga products.</p>
						<form className="flex flex-col md:flex-row md:space-x-2">
							<input
							type="email"
							placeholder="Enter your email"
							className="w-full px-4 py-2 mb-2 md:mb-0 rounded bg-gray-300 text-black placeholder-gray-400 focus:outline-none"
							/>
							<button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded">
							Subscribe
							</button>
						</form>
					</div>
					
				</div>
				
				{/* Bottom Footer */}
				<div className="mt-10 text-center text-gray-300">
					<p>&copy; {new Date().getFullYear()} E-Yoga. All rights reserved.</p>
				</div>
			</footer>
        </section>
    )
}