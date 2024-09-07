import Link from 'next/link'
import { MapPin, Clock, Banknote, ArrowLeft, MessageSquare } from 'lucide-react'

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
    name: "Brew & Study",
    location: "EMU Campus Center",
    googleMapsUrl: "https://goo.gl/maps/example1",
    openTime: "07:00",
    closeTime: "23:00",
    studyScore: 9,
    priceRange: "$$",
    comments: ["Great coffee!", "Quiet atmosphere", "Fast Wi-Fi"]
  },
  {
    name: "Seaside Sips",
    location: "Famagusta Beach Road",
    googleMapsUrl: "https://goo.gl/maps/example2",
    openTime: "09:00",
    closeTime: "22:00",
    studyScore: 6,
    priceRange: "$$$",
    comments: ["Beautiful view", "Bit noisy on weekends", "Delicious pastries"]
  },
  {
    name: "Quiet Corner",
    location: "University Library",
    googleMapsUrl: "https://goo.gl/maps/example3",
    openTime: "08:00",
    closeTime: "20:00",
    studyScore: 10,
    priceRange: "$",
    comments: ["Perfect for studying", "Limited food options", "Always find a seat"]
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Cafes near EMU</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cafes.map((cafe, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{cafe.name}</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <a 
                  href={cafe.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {cafe.location}
                </a>
              </p>
              <p className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {cafe.openTime} - {cafe.closeTime}
              </p>
              <p className="flex items-center">
                <Banknote className="w-4 h-4 mr-2" />
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
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Comments
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {cafe.comments.map((comment, i) => (
                    <li key={i} className="text-sm text-gray-600">{comment}</li>
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