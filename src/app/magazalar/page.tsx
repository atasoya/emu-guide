import Link from 'next/link'
import { ArrowLeft, ExternalLink, MapPin, Tag, Laptop, Shirt } from 'lucide-react'

interface Store {
  id: number
  name: string
  type: string
  place: string
  googleMapsUrl: string
}

const stores: Store[] = [
  {
    id: 1,
    name: "TechZone",
    type: "Technology",
    place: "Salamis Road",
    googleMapsUrl: "https://goo.gl/maps/example1"
  },
  {
    id: 2,
    name: "Fashion Hub",
    type: "Clothes",
    place: "City Center",
    googleMapsUrl: "https://goo.gl/maps/example2"
  },
  {
    id: 3,
    name: "Student Essentials",
    type: "General",
    place: "EMU Campus",
    googleMapsUrl: "https://goo.gl/maps/example3"
  }
]

export default function StoresPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana sayfaya geri dön
      </Link>
      <h1 className="text-3xl font-bold mb-6">Mağazalar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div key={store.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              {store.type === 'Technology' && <Laptop className="w-5 h-5 mr-2" />}
              {store.type === 'Clothes' && <Shirt className="w-5 h-5 mr-2" />}
              {store.type !== 'Technology' && store.type !== 'Clothes' && <Tag className="w-5 h-5 mr-2" />}
              {store.name}
            </h2>
            <p className="text-gray-600 mb-2">Tür: {store.type}</p>
            <p className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <a 
                href={store.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center"
              >
                {store.place}
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}