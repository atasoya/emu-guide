import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin, Banknote, ShoppingCart } from 'lucide-react'

interface Market {
  id: number
  name: string
  place: string
  googleMapsUrl: string
  priceScale: '$' | '$$' | '$$$'
}

const markets: Market[] = [
  {
    id: 1,
    name: "Campus Mini Market",
    place: "EMU Campus",
    googleMapsUrl: "https://goo.gl/maps/example1",
    priceScale: "$$"
  },
  {
    id: 2,
    name: "Famagusta Central Market",
    place: "City Center",
    googleMapsUrl: "https://goo.gl/maps/example2",
    priceScale: "$"
  },
  {
    id: 3,
    name: "Salamis Supermarket",
    place: "Salamis Road",
    googleMapsUrl: "https://goo.gl/maps/example3",
    priceScale: "$$$"
  }
]

export default function MarketsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sayfaya Geri Dön
      </Link>
      <h1 className="text-3xl font-bold mb-6">Marketler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {markets.map((market) => (
          <div key={market.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              {market.name}
            </h2>
            <p className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <a 
                href={market.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center"
              >
                {market.place}
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </p>
            <p className="flex items-center text-green-600 font-semibold">
              <Banknote className="w-4 h-4 mr-2" />
              {market.priceScale}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}