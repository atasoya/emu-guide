import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Banknote,
  ShoppingCart,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markets",
};

interface Market {
  id: number;
  name: string;
  place: string;
  googleMapsUrl: string;
  priceScale: "$" | "$$" | "$$$";
}

const markets: Market[] = [
  {
    id: 1,
    name: "Koop Market",
    place: "Alfam Vista",
    googleMapsUrl: "https://maps.app.goo.gl/Vjv3Yqm5R5eEFeVF8",
    priceScale: "$$",
  },
  {
    id: 2,
    name: "Molto",
    place: "Prime Living Dormitory",
    googleMapsUrl: "https://maps.app.goo.gl/CA1kqMC8b8qWPxjc8",
    priceScale: "$$",
  },
  {
    id: 3,
    name: "B1 Market",
    place: "Salamis Road",
    googleMapsUrl: "https://maps.app.goo.gl/1ShWcUPJNXgDWpXFA",
    priceScale: "$",
  },
  {
    id: 4,
    name: "Cilem Off Licence",
    place: "Salamis Road",
    googleMapsUrl: "https://maps.app.goo.gl/MWDLV5XfLSJzSmBw7",
    priceScale: "$",
  },
  {
    id: 5,
    name: "Unimar",
    place: "City Mall",
    googleMapsUrl: "https://maps.app.goo.gl/Ls29PgEf4an3John7",
    priceScale: "$$",
  },
  {
    id: 6,
    name: "Macro Supermarket",
    place: "Salamis Road",
    googleMapsUrl: "https://maps.app.goo.gl/9DJ7N843RvvVuvhg8",
    priceScale: "$$",
  },
  {
    id: 6,
    name: "Muncipalty Bazar",
    place: "Terminal",
    googleMapsUrl: "https://maps.app.goo.gl/LQjQGyCpyPqrmkYL7",
    priceScale: "$",
  },
  {
    id: 6,
    name: "Molto",
    place: "Terminal",
    googleMapsUrl: "https://maps.app.goo.gl/cPmKvEF7xBdCCvcY7",
    priceScale: "$$",
  },
];

export default function MarketsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Markets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {markets.map((market) => (
          <div
            key={market.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2 text-gray-700" />
              {market.name}
            </h2>
            <p className="flex items-center text-gray-700 mb-2">
              <MapPin className="w-5 h-5 mr-2 text-gray-700" />
              <a
                href={market.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                {market.place}
                <ExternalLink className="w-4 h-4 ml-2 text-blue-600" />
              </a>
            </p>
            <p className="flex items-center text-green-600 font-semibold">
              <Banknote className="w-5 h-5 mr-2" />
              {market.priceScale}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
