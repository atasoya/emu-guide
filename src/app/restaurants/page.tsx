import Link from 'next/link'
import { MapPin, Clock, Banknote, ArrowLeft, MessageSquare } from 'lucide-react'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Restaurants',
}

interface Cafe {
  name: string
  location: string
  googleMapsUrl: string
  openTime: string
  closeTime: string
  studyScore: number
  priceRange: '$' | '$$' | '$$$'
  comments: string[]
}

const cafes: Cafe[] = [
  {
    name: "Ekor Vista",
    location: "Alfam Vista",
    googleMapsUrl: "https://maps.app.goo.gl/jU9wFTwvqoYJzCgi7",
    openTime: "07:00",
    closeTime: "00:00",
    studyScore: 7,
    priceRange: "$$",
    comments: ["Good food", "Always has space", "Popular place"]
  },
  {
    name: "Miami Restaurant",
    location: "Prime Dormitory",
    googleMapsUrl: "https://maps.app.goo.gl/jU9wFTwvqoYJzCgi7",
    openTime: "11:00",
    closeTime: "20:00",
    studyScore: 5,
    priceRange: "$",
    comments: ["Pay for what you get", "Clean & healthy food", "Quiet"]
  },
  {
    name: "Twister Cafe",
    location: "Ugursal Dormitory",
    googleMapsUrl: "https://maps.app.goo.gl/Ehus6ehBBXu4qbYs9",
    openTime: "11:00",
    closeTime: "00:00",
    studyScore: 5,
    priceRange: "$",
    comments: ["Fast", "Quiet", "Fair prices"]
  },
  {
    name: "Jojo Cafe",
    location: "Computer Engineering Building",
    googleMapsUrl: "https://maps.app.goo.gl/sPhhxqCWg73to7fRA",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 9,
    priceRange: "$$",
    comments: ["Best place to study", "Good food", "Plugs available"] 
  },
  {
    name: "Baron Cafe",
    location: "Law Building",
    googleMapsUrl: "https://maps.app.goo.gl/on3ztvvgFTpGTf3t9",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Always has space", "Offers food & market", "Central location"] 
  },
  {
    name: "The King of Chicken Burger",
    location: "Campus Enterance",
    googleMapsUrl: "https://maps.app.goo.gl/N2dUbD1uKRyDQBL48",
    openTime: "11:30",
    closeTime: "10:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Large portions", "Slow delivery times", "Great for groups"] 
  },
  {
    name: "Tabledot Restaurant",
    location: "Eastern Mediterranean University",
    googleMapsUrl: "https://maps.app.goo.gl/obRKJpGnz2gSFg1B7",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Popular place", "Central location", "Has AC"]
  },
  {
    name: "Sandras Cafe",
    location: "Central Lecture Hall",
    googleMapsUrl: "https://maps.app.goo.gl/JAiuxVeezR5YWNS7A",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 7,
    priceRange: "$$",
    comments: ["Clean", "Has pool table & pinball", "Has a market"]
  },
  {
    name: "Sultan Cafe",
    location: "Ozay Oral Library",
    googleMapsUrl: "https://maps.app.goo.gl/n2tmnWstt4d58aZr5",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 7,
    priceRange: "$",
    comments: ["Open 24/7 during exam weeks", "Very friendly", "Has a market & cafe"]
  },
  {
    name: "R&D Cafe",
    location: "Faculty of Education",
    googleMapsUrl: "https://maps.app.goo.gl/atJum7j5HEnveN729",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Big space", "Good food & coffee", "Has a market"]
  },
  {
    name: "Sosla Bi Doner",
    location: "Roundabout",
    googleMapsUrl: "https://maps.app.goo.gl/73uUhX1GdkpLTqvx7",
    openTime: "07:00",
    closeTime: "02:00",
    studyScore: 5,
    priceRange: "$",
    comments: ["Cheap", "Fast", "Outside of campus"]
  },
  {
    name: "Crunchy",
    location: "Roundabout",
    googleMapsUrl: "https://maps.app.goo.gl/wmCygC6vCypMMnM86",
    openTime: "12:00",
    closeTime: "03:00",
    studyScore: 7,
    priceRange: "$$",
    comments: ["Good quality", "Tasty", "Quiet"]
  },
  {
    name: "Red Bear Restaurant",
    location: "Ismet Inönü Blv",
    googleMapsUrl: "https://maps.app.goo.gl/CuFghNdNM5HCpKJA8",
    openTime: "08:00",
    closeTime: "00:00",
    studyScore: 7,
    priceRange: "$$",
    comments: ["Good quality", "Tasty", "Quiet"]
  },
  {
    name: "Şampiyon Restaurant",
    location: "Ismet Inönü Blv",
    googleMapsUrl: "https://maps.app.goo.gl/cUAC9wKx5YZAkyQx7",
    openTime: "10:00",
    closeTime: "21:00",
    studyScore: 5,
    priceRange: "$$",
    comments: ["Good quality", "Tasty", "Quiet"]
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Restaurants near EMU</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cafes.map((cafe, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{cafe.name}</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                <a 
                  href={cafe.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  {cafe.location}
                </a>
              </p>
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gray-500" />
                {cafe.openTime} - {cafe.closeTime}
              </p>
              <p className="flex items-center">
                <Banknote className="w-5 h-5 mr-2 text-gray-500" />
                {cafe.priceRange}
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">Study Score:</span>
                <span className={`px-2 py-1 rounded ${
                  cafe.studyScore >= 8 ? 'bg-green-100 text-green-800' :
                  cafe.studyScore >= 5 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {cafe.studyScore}/10
                </span>
              </p>
              <div className="mt-4">
                <h3 className="font-semibold flex items-center mb-2">
                  <MessageSquare className="w-5 h-5 mr-2 text-gray-500" />
                  Comments
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {cafe.comments.map((comment, i) => (
                    <li key={i} className="text-sm">{comment}</li>
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
