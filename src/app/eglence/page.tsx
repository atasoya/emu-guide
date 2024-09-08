import Link from 'next/link'
import { ArrowLeft, MapPin, Banknote, ExternalLink, MessageSquare } from 'lucide-react'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Eğlence',
}

interface Entertainment {
  id: number
  name: string
  place: string
  googleMapsUrl: string
  priceRange: '$' | '$$' | '$$$'
  comments: string[]
}

const entertainments: Entertainment[] = [
  {
    id: 1,
    name: "Salamis Bay Conti Resort",
    place: "Yeni Boğaziçi",
    googleMapsUrl: "https://goo.gl/maps/example1",
    priceRange: "$$$",
    comments: ["Great beach", "Excellent facilities", "Bit pricey"]
  },
  {
    id: 2,
    name: "Glapsides Beach",
    place: "Famagusta",
    googleMapsUrl: "https://goo.gl/maps/example2",
    priceRange: "$",
    comments: ["Beautiful public beach", "Good for swimming", "Can get crowded"]
  },
  {
    id: 3,
    name: "EMU Cinema Club",
    place: "EMU Campus",
    googleMapsUrl: "https://goo.gl/maps/example3",
    priceRange: "$",
    comments: ["Regular movie screenings", "Affordable", "Good selection of films"]
  }
]

export default function EntertainmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sayfaya Geri Dön
      </Link>
      <h1 className="text-3xl font-bold mb-6">DAÜ&apos;de Eğlence</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entertainments.map((ent) => (
          <div key={ent.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{ent.name}</h2>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <a 
                  href={ent.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  {ent.place}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </p>
              <p className="flex items-center text-green-600 font-semibold">
                <Banknote className="w-4 h-4 mr-2" />
                {ent.priceRange}
              </p>
              <div className="mt-4">
                <h3 className="font-semibold flex items-center mb-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Yorumlar
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {ent.comments.map((comment, index) => (
                    <li key={index} className="text-sm text-gray-600">{comment}</li>
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