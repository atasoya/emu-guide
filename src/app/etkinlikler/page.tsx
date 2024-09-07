import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Banknote, ExternalLink } from 'lucide-react'

interface Event {
  id: number
  name: string
  date: string
  place: string
  googleMapsUrl: string
  cost: string
}

const events: Event[] = [
  {
    id: 1,
    name: "EMU Spring Festival",
    date: "2024-04-15",
    place: "EMU Stadium",
    googleMapsUrl: "https://goo.gl/maps/example1",
    cost: "Free"
  },
  {
    id: 2,
    name: "International Food Fair",
    date: "2024-05-20",
    place: "Central Square",
    googleMapsUrl: "https://goo.gl/maps/example2",
    cost: "10 TL"
  },
  {
    id: 3,
    name: "Career Day",
    date: "2024-06-05",
    place: "EMU Conference Center",
    googleMapsUrl: "https://goo.gl/maps/example3",
    cost: "Free for students"
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Anasayfaya Geri Dön
      </Link>
      <h1 className="text-3xl font-bold mb-6">Daü Etkinlikleri</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <a 
                  href={event.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  {event.place}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </p>
              <p className="flex items-center text-green-600 font-semibold">
                <Banknote className="w-4 h-4 mr-2" />
                {event.cost}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}