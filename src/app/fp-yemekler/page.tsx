import Link from 'next/link'
import { ArrowLeft, MapPin, Banknote, MessageSquare, ExternalLink } from 'lucide-react'

interface PPFood {
  id: number
  name: string
  place: string
  googleMapsUrl: string
  price: number
  comments: string[]
}

const ppFoods: PPFood[] = [
  {
    id: 1,
    name: "Tavuk Pilav",
    place: "Campüs Kafe",
    googleMapsUrl: "https://maps.app.goo.gl/6swCDoq8E5HhfAwY7",
    price: 130,
    comments: ["Ücretine göre yüksek değer", "Sağlıklı", "Hızlı servis"]
  },
]

export default function PricePerformanceFoods() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sayfaya Geri Dön
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Fiyat Performans Yemekler</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ppFoods.map((food) => (
          <div key={food.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{food.name}</h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-2" />
                <a 
                  href={food.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  {food.place}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </p>
              <p className="flex items-center text-green-600 text-lg font-bold">
                <Banknote className="w-5 h-5 mr-2" />
                {food.price.toFixed(2)} TL
              </p>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 flex items-center mb-2">
                  <MessageSquare className="w-5 h-5 mr-2 text-gray-700" />
                  Yorumlar
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {food.comments.map((comment, index) => (
                    <li key={index} className="text-sm text-gray-700">{comment}</li>
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
