import Link from 'next/link'
import { ArrowLeft, MapPin, Banknote, ExternalLink, Home, MessageSquare } from 'lucide-react'

interface Dormitory {
  id: number
  name: string
  place: string
  googleMapsUrl: string
  priceRange: '$' | '$$' | '$$$'
  officialPageUrl: string
  facilities: string[]
  comments: string[]
}

const dormitories: Dormitory[] = [
  {
    id: 1,
    name: "Alfam Dorm",
    place: "Salamis Road",
    googleMapsUrl: "https://goo.gl/maps/example1",
    priceRange: "$$$",
    officialPageUrl: "https://emu.edu.tr/en/dormitories/alfam-dorm",
    facilities: ["Wi-Fi", "Air Conditioning", "Laundry", "Study Rooms", "Gym"],
    comments: ["Modern and clean", "Great location", "Friendly staff"]
  },
  {
    id: 2,
    name: "Marmara Dorm",
    place: "EMU Campus",
    googleMapsUrl: "https://goo.gl/maps/example2",
    priceRange: "$$",
    officialPageUrl: "https://emu.edu.tr/en/dormitories/marmara-dorm",
    facilities: ["Wi-Fi", "Air Conditioning", "Shared Kitchen", "TV Room"],
    comments: ["Good value for money", "Close to classes", "Needs renovation"]
  },
  {
    id: 3,
    name: "Akdeniz Dorm",
    place: "EMU Campus",
    googleMapsUrl: "https://goo.gl/maps/example3",
    priceRange: "$",
    officialPageUrl: "https://emu.edu.tr/en/dormitories/akdeniz-dorm",
    facilities: ["Wi-Fi", "Shared Bathrooms", "Common Areas"],
    comments: ["Affordable option", "Basic amenities", "Good for socializing"]
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">EMU Dormitories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dormitories.map((dorm) => (
          <div key={dorm.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{dorm.name}</h2>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <a 
                  href={dorm.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  {dorm.place}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </p>
              <p className="flex items-center text-green-600 font-semibold">
                <Banknote className="w-4 h-4 mr-2" />
                {dorm.priceRange}
              </p>
              <p className="flex items-center text-blue-600">
                <Home className="w-4 h-4 mr-2" />
                <a 
                  href={dorm.officialPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  Official Dorm Page
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </p>
              <div>
                <h3 className="font-semibold mb-1">Facilities:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {dorm.facilities.map((facility, index) => (
                    <li key={index} className="text-sm text-gray-600">{facility}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold flex items-center mb-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Comments
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {dorm.comments.map((comment, index) => (
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