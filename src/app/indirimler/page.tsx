import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin, Tag } from 'lucide-react'

interface Discount {
  id: number
  name: string
  place: string
  googleMapsUrl: string
  discountPrice: number
  previousPrice: number
}

const discounts: Discount[] = [
  {
    id: 1,
    name: "Student Meal Deal",
    place: "Campus Cafeteria",
    googleMapsUrl: "https://goo.gl/maps/example1",
    discountPrice: 15,
    previousPrice: 25
  },
  {
    id: 2,
    name: "Textbook Bundle",
    place: "EMU Bookstore",
    googleMapsUrl: "https://goo.gl/maps/example2",
    discountPrice: 200,
    previousPrice: 300
  },
  {
    id: 3,
    name: "Gym Membership",
    place: "EMU Sports Center",
    googleMapsUrl: "https://goo.gl/maps/example3",
    discountPrice: 50,
    previousPrice: 80
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana sayfaya Geri Dön
      </Link>
      <h1 className="text-3xl font-bold mb-6">İndirimler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {discounts.map((discount) => (
          <div key={discount.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Tag className="w-5 h-5 mr-2" />
              {discount.name}
            </h2>
            <p className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <a 
                href={discount.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center"
              >
                {discount.place}
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </p>
            <p className="text-green-600 font-semibold">
              Now: {discount.discountPrice} TL
              <span className="text-gray-400 line-through ml-2">
                Was: {discount.previousPrice} TL
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}