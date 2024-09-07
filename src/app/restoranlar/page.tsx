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
    name: "Ekor Vista",
    location: "Alfam Vista",
    googleMapsUrl: "https://maps.app.goo.gl/jU9wFTwvqoYJzCgi7",
    openTime: "07:00",
    closeTime: "00:00",
    studyScore: 7,
    priceRange: "$$",
    comments: ["İyi yemekler", "Her zaman yer var", "Popüler mekan"]
  },
  {
    name: "Miami Restaurant",
    location: "Prime Yurdu",
    googleMapsUrl: "https://maps.app.goo.gl/jU9wFTwvqoYJzCgi7",
    openTime: "11:00",
    closeTime: "20:00",
    studyScore: 5,
    priceRange: "$",
    comments: ["Tabak başına ödeme", "Temiz ve sağlıklı yemekler", "Sessiz"]
  },
  {
    name: "Twister Cafe",
    location: "Ugursal Yurdu",
    googleMapsUrl: "https://maps.app.goo.gl/Ehus6ehBBXu4qbYs9",
    openTime: "11:00",
    closeTime: "00:00",
    studyScore: 5,
    priceRange: "$",
    comments: ["Hızlı", "Sessiz", "Uygun fiyatlar"]
  },
  {
    name: "Jojo Cafe",
    location: "Bilgisayar Mühendisliği Binası",
    googleMapsUrl: "https://maps.app.goo.gl/sPhhxqCWg73to7fRA",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 9,
    priceRange: "$$",
    comments: ["Çalışmak için en iyi yer", "İyi yemek", "Prizler mevcut"]
  },
  {
    name: "Baron Cafe",
    location: "Hukuk Fakültesi Binası",
    googleMapsUrl: "https://maps.app.goo.gl/on3ztvvgFTpGTf3t9",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Her zaman yer var", "Yemek ve market mevcut", "Merkezi konum"]
  },
  {
    name: "Tabledot Restaurant",
    location: "Doğu Akdeniz Üniversitesi",
    googleMapsUrl: "https://maps.app.goo.gl/obRKJpGnz2gSFg1B7",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Popüler mekan", "Merkezi konum", "Klima mevcut"]
  },
  {
    name: "The King of Chicken Burger",
    location: "Kampüs Girişi",
    googleMapsUrl: "https://maps.app.goo.gl/N2dUbD1uKRyDQBL48",
    openTime: "11:30",
    closeTime: "10:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Büyük porsiyonlar", "Yavaş servis", "Gruplar için ideal"] 
  },
  {
    name: "Sandras Cafe",
    location: "Merkez Derslik",
    googleMapsUrl: "https://maps.app.goo.gl/JAiuxVeezR5YWNS7A",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 7,
    priceRange: "$$",
    comments: ["Temiz", "Bilardo ve langırt var", "Market mevcut"]
  },
  {
    name: "Sultan Cafe",
    location: "Ozay Oral Kütüphanesi",
    googleMapsUrl: "https://maps.app.goo.gl/n2tmnWstt4d58aZr5",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 7,
    priceRange: "$",
    comments: ["Sınav haftalarında 7-24 açık", "Çok dostane", "Market ve kafe var"]
  },
  {
    name: "R&D Cafe",
    location: "Eğitim Fakültesi",
    googleMapsUrl: "https://maps.app.goo.gl/atJum7j5HEnveN729",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Büyük mekan", "İyi yemekler ve kahve", "Market mevcut"]
  },
  {
    name: "Sosla Bi Döner",
    location: "Çember",
    googleMapsUrl: "https://maps.app.goo.gl/73uUhX1GdkpLTqvx7",
    openTime: "07:00",
    closeTime: "02:00",
    studyScore: 5,
    priceRange: "$",
    comments: ["Ucuz", "Hızlı", "Kampüs dışında"]
  },
  {
    name: "Crunchy",
    location: "Çember",
    googleMapsUrl: "https://maps.app.goo.gl/wmCygC6vCypMMnM86",
    openTime: "12:00",
    closeTime: "03:00",
    studyScore: 7,
    priceRange: "$$",
    comments: ["İyi kalite", "Lezzetli", "Sessiz"]
  },
  {
    name: "Red Bear Restaurant",
    location: "İsmet İnönü Bulvarı",
    googleMapsUrl: "https://maps.app.goo.gl/CuFghNdNM5HCpKJA8",
    openTime: "08:00",
    closeTime: "00:00",
    studyScore: 7,
    priceRange: "$$",
    comments: ["İyi kalite", "Lezzetli", "Sessiz"]
  },
  {
    name: "Şampiyon Restaurant",
    location: "İsmet İnönü Bulvarı",
    googleMapsUrl: "https://maps.app.goo.gl/cUAC9wKx5YZAkyQx7",
    openTime: "10:00",
    closeTime: "21:00",
    studyScore: 5,
    priceRange: "$$",
    comments: ["İyi kalite", "Lezzetli", "Sessiz"]
  }
]


export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sayfaya Geri Dön
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">DAÜ yakınlarındaki restoranlar</h1>
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
