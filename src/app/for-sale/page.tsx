import Link from "next/link";
import { ArrowLeft, ExternalLink, ShoppingBag, PlusCircle } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Sale",
};

interface SaleItem {
  id: number;
  name: string;
  price: number;
  contactLink: string;
}

const saleItems: SaleItem[] = [];

export default function ForSalePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Items For Sale</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {saleItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2 text-gray-700" />
              {item.name}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Price: <span className="font-medium">{item.price} TL</span>
            </p>
            <a
              href={item.contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              Contact Seller
              <ExternalLink className="w-4 h-4 ml-2 text-blue-600" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Submit Sale Item Listing
        </a>
      </div>
    </div>
  );
}
