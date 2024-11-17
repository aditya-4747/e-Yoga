import Link from 'next/link';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Delius_Swash_Caps } from 'next/font/google';

const delius = Delius_Swash_Caps({weight: ['400'], subsets: ['latin']});

export default function NavigationMenu() {

    return (
        <header className="flex items-center justify-around px-10 py-5 text-white bg-cyan-600">

            <div className="flex items-center space-x-2">
                <a href='/' className={`text-4xl font-bold ${delius.className}`}>e-Yoga</a>
            </div>

            <nav className="space-x-6 text-xl">
                <Link href="/" className="hover:text-black">Home</Link>
                <Link href="/products" className="hover:text-black">Products</Link>
                <Link href="/blog" className="hover:text-black">Blog</Link>
                <Link href="#contact" className="hover:text-black">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
                <a href='/user/cart'><ShoppingCartIcon className="w-6 h-6 cursor-pointer hover:text-black" /></a>
                <a href='/user/admin'><UserCircleIcon className="w-8 h-8 cursor-pointer hover:text-black" /></a>
            </div>
        </header>
    );
}