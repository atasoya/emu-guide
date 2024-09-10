import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin, Banknote, Printer, Book } from 'lucide-react'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Stationery',
}

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
    name: "Campus Copy Center",
    priceScale: "$$",
    place: "Alfam Vista",
    googleMapsUrl: "https://maps.app.goo.gl/XaP7Ko6ai8bCFZqx9",
    services: ["Printing", "Regular stationary", "Office supplies"]
  },
  {
    id: 2,
    name: "Deniz Shop",
    priceScale: "$$$",
    place: "Central Lecture Hall",
    googleMapsUrl: "https://maps.app.goo.gl/REqKjwtF15mYtpqf6",
    services: ["High-quality printing", "Offical academic books", "All kinds of stationary"]
  },
  {
    id: 3,
    name: "Gunes Kirtasiye",
    priceScale: "$",
    place: "Salamis Road",
    googleMapsUrl: "https://maps.app.goo.gl/kEZ1vf2w9X3TSWwG6",
    services: ["Cheap printing", "Regual stationary"]
  },
  {
    id: 4,
    name: "Harmony Copy Center",
    priceScale: "$$",
    place: "Salamis Road",
    googleMapsUrl: "https://maps.app.goo.gl/dVfPuVamM3ZgBYAz9",
    services: ["Printing", "Books","Music related stuff"]
  }
]

export default function StationaryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Stationery Shops</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stationaryShops.map((shop) => (
          <div key={shop.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{shop.name}</h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-2" />
                <a 
                  href={shop.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  {shop.place}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </p>
              <p className="flex items-center text-green-600 font-bold">
                <Banknote className="w-5 h-5 mr-2" />
                {shop.priceScale}
              </p>
              <div>
                <h3 className="font-semibold mb-2">Services:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {shop.services.map((service, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-center">
                      {service.toLowerCase().includes('printing') && <Printer className="w-4 h-4 mr-2" />}
                      {service.toLowerCase().includes('book') && <Book className="w-4 h-4 mr-2" />}
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
