import Link from 'next/link'
import { ArrowLeft, MapPin, ExternalLink, Building2, Stethoscope, Pill, AlertTriangle } from 'lucide-react'

interface HealthFacility {
  id: number
  name: string
  type: 'Hastane' | 'Klinik' | 'Eczane'
  location: string
  googleMapsUrl: string
}

const healthFacilities: HealthFacility[] = [
  {
    id: 1,
    name: "DAÜ Sağlık Merkezi",
    type: "Klinik",
    location: "DAÜ Kampüsü",
    googleMapsUrl: "https://goo.gl/maps/example1"
  },
  {
    id: 2,
    name: "Gazimağusa Devlet Hastanesi",
    type: "Hastane",
    location: "Salamis Yolu",
    googleMapsUrl: "https://goo.gl/maps/example2"
  },
  {
    id: 3,
    name: "Merkez Eczanesi",
    type: "Eczane",
    location: "Şehir Merkezi",
    googleMapsUrl: "https://goo.gl/maps/example3"
  }
]

export default function HealthPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Anasayfaya Geri Dön
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Sağlık Tesisleri</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {healthFacilities.map((facility) => (
          <div key={facility.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-900">
              {facility.type === 'Hastane' && <Building2 className="w-6 h-6 mr-2 text-red-500" />}
              {facility.type === 'Klinik' && <Stethoscope className="w-6 h-6 mr-2 text-blue-500" />}
              {facility.type === 'Eczane' && <Pill className="w-6 h-6 mr-2 text-green-500" />}
              {facility.name}
            </h2>
            <div className="space-y-3">
              <p className="text-gray-600">Tür: {facility.type}</p>
              <p className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
                <a 
                  href={facility.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  {facility.location}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg shadow-md">
        <p className="flex items-center font-bold text-lg">
          <AlertTriangle className="w-6 h-6 mr-2" />
          Önemli Bilgi
        </p>
        <p className="mt-2 text-gray-700 flex space-x-1">
          Mesai saatleri dışındaki eczane hizmetleri için 
          <Link href="https://www.kteb.org/dp/?lang=tr" className="text-blue-600 hover:underline ml-1">
            Nöbetçi Eczaneler listesine
          </Link>
          <p>
          göz atınız.
          </p>
        </p>
      </div>
    </div>
  )
}
