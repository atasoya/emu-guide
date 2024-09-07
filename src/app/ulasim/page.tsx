import Link from 'next/link'
import { ArrowLeft, ExternalLink, Bus } from 'lucide-react'

interface Transportation {
  id: number
  name: string
  explanation: string
  officialLink: string
}

const transportations: Transportation[] = [
  {
    id: 1,
    name: "EMU Shuttle Service",
    explanation: "Free shuttle service for students between campus and city center.",
    officialLink: "https://emu.edu.tr/transportation/shuttle"
  },
  {
    id: 2,
    name: "Famagusta City Bus",
    explanation: "Public bus service covering major routes in Famagusta.",
    officialLink: "https://famagusta.gov.ct.tr/transportation"
  },
  {
    id: 3,
    name: "Bicycle Rental",
    explanation: "Eco-friendly transportation option available on campus.",
    officialLink: "https://emu.edu.tr/transportation/bicycle"
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Anasayfaya Geri Dön
      </Link>
      <h1 className="text-3xl font-bold mb-6">DAÜ Ulaşım Olanakları</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transportations.map((transport) => (
          <div key={transport.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Bus className="w-5 h-5 mr-2" />
              {transport.name}
            </h2>
            <p className="text-gray-600 mb-4">{transport.explanation}</p>
            <a 
              href={transport.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              Resmi Sayfa
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}