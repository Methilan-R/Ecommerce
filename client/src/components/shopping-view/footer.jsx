import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function ShoppingFooter() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Ecommerce</h3>
          <p className="text-sm text-gray-300">
            Explore top fashion, electronics, and lifestyle products at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/shop/home" className="hover:text-white">Home</Link></li>
            <li><Link to="/shop/listing" className="hover:text-white">Products</Link></li>
            <li><Link to="/shop/account" className="hover:text-white">My Account</Link></li>
            <li><Link to="/shop/cart" className="hover:text-white">Cart</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> support@ecommerce.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +94 77 123 4567
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Colombo, Sri Lanka
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500"><Facebook /></a>
            <a href="#" className="hover:text-pink-400"><Instagram /></a>
            <a href="#" className="hover:text-sky-400"><Twitter /></a>
            <a href="#" className="hover:text-red-500"><Youtube /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-sm text-gray-400 text-center py-4">
        © {new Date().getFullYear()} Ecommerce. All rights reserved.
      </div>
    </footer>
  );
}

export default ShoppingFooter;
