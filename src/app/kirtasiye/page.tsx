import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin, Banknote, Printer, Book } from 'lucide-react'

interface Stationary {
  id: number
  name: string
  priceScale: '$' | '$$' | '$$$'
  place: string
  googleMapsUrl: string
  services: string[]
}

const stationaryShops: Stationary[] = [
  {
    id: 1,
    name: "Campus Bookstore",
    priceScale: "$$",
    place: "EMU Campus",
    googleMapsUrl: "https://goo.gl/maps/example1",
    services: ["Printing", "Selling school books", "Office supplies"]
  },
  {
    id: 2,
    name: "City Stationary",
    priceScale: "$",
    place: "Famagusta City Center",
    googleMapsUrl: "https://goo.gl/maps/example2",
    services: ["Printing", "Photocopying", "Art supplies"]
  },
  {
    id: 3,
    name: "Academic Supplies",
    priceScale: "$$$",
    place: "Salamis Road",
    googleMapsUrl: "https://goo.gl/maps/example3",
    services: ["Specialized academic books", "High-quality printing", "Custom binding"]
  }
]

export default function StationaryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Kırtasiyeler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stationaryShops.map((shop) => (
          <div key={shop.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{shop.name}</h2>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <a 
                  href={shop.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  {shop.place}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </p>
              <p className="flex items-center text-green-600 font-semibold">
                <Banknote className="w-4 h-4 mr-2" />
                {shop.priceScale}
              </p>
              <div>
                <h3 className="font-semibold mb-1">Servisler:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {shop.services.map((service, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      {service.toLowerCase().includes('printing') && <Printer className="w-3 h-3 mr-1" />}
                      {service.toLowerCase().includes('book') && <Book className="w-3 h-3 mr-1" />}
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}