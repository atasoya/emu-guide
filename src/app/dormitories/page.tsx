import Link from 'next/link'
import { ArrowLeft, MapPin, Banknote, ExternalLink, Home, MessageSquare } from 'lucide-react'

/* interface Dormitory {
  id: number
  name: string
  place: string
  googleMapsUrl: string
  priceRange: '$' | '$$' | '$$$'
  officialPageUrl: string
  facilities: string[]
  comments: string[]
} */

const dormitories = [
  {
    id: 1,
    name: "Alfam Student Dormitory",
    place: "North Campus",
    googleMapsUrl: "https://maps.app.goo.gl/PhiKd4k6wJW1DDsb7",
    priceRange: "$$$",
    officialPageUrl: "https://www.alfamcyprus.com/",
    facilities: ["Wi-Fi", "Air Conditioning", "Gym", "Laundry"],
    comments: ["Modern and clean", "Great location"]
  },
  {
    id: 2,
    name: "Ugursal Student Dormitory",
    place: "EMU Campus",
    googleMapsUrl: "https://maps.app.goo.gl/ub9yUoV87SEhQcjr7",
    priceRange: "$$",
    officialPageUrl: "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/ugursal",
    facilities: ["Wi-Fi", "Shared Kitchen", "Study Rooms"],
    comments: ["Affordable", "Good community"]
  },
  {
    id: 3,
    name: "Longson Student Dormitory",
    place: "EMU Campus",
    googleMapsUrl: "https://maps.app.goo.gl/WtCYaZHgE8zXDd4B7",
    priceRange: "$$",
    officialPageUrl: "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/longson",
    facilities: ["Wi-Fi", "Air Conditioning", "Shared Bathrooms"],
    comments: ["Convenient location", "Cafeteria","Student kitchens"]
  },
  {
    id: 4,
    name: "Inn Dorm Student Dormitory",
    place: "EMU Campus",
    googleMapsUrl: "https://goo.gl/maps/inn-dorm",
    priceRange: "$",
    officialPageUrl: "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/inn-dorm",
    facilities: ["Cafeteria", "Interior Garden", "Sea View Rooms"],
    comments: ["Basic but comfortable", "Friendly staff"]
  },
  {
    id: 5,
    name: "Prime Living Student Dormitory",
    place: "EMU Campus",
    googleMapsUrl: "https://maps.app.goo.gl/fmCqkQbUYD4nZDkVA",
    priceRange: "$$$",
    officialPageUrl: "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/prime-living",
    facilities: ["Electric generator", "Gym", "Copy center",],
    comments: ["Safe", "Top-notch facilities"]
  },
  {
    id: 6,
    name: "Ramen Student Dormitory",
    place: "EMU Campus",
    googleMapsUrl: "https://maps.app.goo.gl/Ajeusbf9xM47aqEx8",
    priceRange: "$",
    officialPageUrl: "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/ramen",
    facilities: ["Restaurant", "Exchange Office", "Room cleaning twice per week"],
    comments: ["Clean", "Basic amenities"]
  },
  {
    id: 7,
    name: "Golden Plus Dormitory",
    place: "EMU Campus",
    googleMapsUrl: "https://maps.app.goo.gl/nSMZJ1mNJ7SomYPi6",
    priceRange: "$$",
    officialPageUrl: "https://www.emu.edu.tr/dormitories/golden-plus",
    facilities: ["Male/female Seperate Blocks", "Gym", "Project & Study Room"],
    comments: ["Premium", "Great value"]
  },
  {
    id: 8,
    name: "Novel Centre Point Dormitory",
    place: "EMU Campus",
    googleMapsUrl: "https://goo.gl/maps/novel-centre-point",
    priceRange: "$$$",
    officialPageUrl: "https://www.emu.edu.tr/dormitories/novel-centre-point",
    facilities: ["24 hour hot and cold running water", "Room service", "Swimming pool",],
    comments: ["Luxurious", "Very comfortable"]
  },
  {
    id: 9,
    name: "Astra Plus Dormitory",
    place: "South Campus",
    googleMapsUrl: "https://maps.app.goo.gl/WTw9d2aJS2BmbJyo7",
    priceRange: "$$$",
    officialPageUrl: "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/astra-plus",
    facilities:  ["Gym", "Laundry", "Hairdresser"],
    comments: ["Good facilities", "Great value"]
  },
  {
    id: 10,
    name: "Pop Art Dormitory",
    place: "South Campus",
    googleMapsUrl: "https://maps.app.goo.gl/jqnStSiCQkqAYsgK6",
    priceRange: "$$$",
    officialPageUrl: "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/pop-art",
    facilities: ["Gym", "Gloria Jeans", "Cinema"],
    comments: ["Modern design", "Comfortable"]
  },
  {
    id: 11,
    name: "Nural Dormitory",
    place: "EMU Campus",
    googleMapsUrl: "https://maps.app.goo.gl/U4V1bM42nVWU1xdRA",
    priceRange: "$$",
    officialPageUrl: "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/nural",
    facilities: ["Laundry facilities", "Generator", "Fitness Center"],
    comments: ["Market(7/24)", "Friendly staff"]
  },
  {
    id: 12,
    name: "Grand Aras Dormitory",
    place: "EMU Campus",
    googleMapsUrl: "https://maps.app.goo.gl/UvcUYZEw6w3ZMttJ8",
    priceRange: "$$",
    officialPageUrl: "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/grand-aras",
    facilities: ["Gym", "Library", "Key Card System"],
    comments: ["Good location", "Well maintained"]
  }
];


export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">EMU Dormitories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dormitories.map((dorm) => (
          <div key={dorm.id} className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">{dorm.name}</h2>
            <div className="space-y-3">
              <p className="flex items-center text-gray-700">
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
              <p className={`flex items-center font-semibold ${
                  dorm.priceRange === '$$$' ? 'text-red-600' : dorm.priceRange === '$$' ? 'text-yellow-600' : 'text-green-600'
                }`}>
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
              <div className="border-t pt-3">
                <h3 className="font-semibold mb-1">Facilities:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {dorm.facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 border-t pt-3 bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold flex items-center mb-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Comments
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-500">
                  {dorm.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
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
