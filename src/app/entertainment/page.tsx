import Link from 'next/link'
import { ArrowLeft, MapPin, Banknote, ExternalLink, MessageSquare } from 'lucide-react'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Entertainment',
}

interface Entertainment {
  id: number
  name: string
  place: string
  googleMapsUrl: string
  priceRange: '$' | '$$' | '$$$'
  comments: string[]
}

const entertainments: Entertainment[] = [
  {
    id: 1,
    name: 'BARCODE',
    place: 'Roundabout',
    googleMapsUrl: 'https://maps.app.goo.gl/GvGaSmgWYrKzoUpn8?g_st=com.google.maps.preview.copy',
    priceRange: '$',
    comments: ['Convenient location', 'Chill atmosphere', 'Live music'],
  },
  {
    id: 2,
    name: 'Jooker Live',
    place: 'Roundabout',
    googleMapsUrl: 'https://maps.app.goo.gl/2FeR2bsUdxoqYXie6?g_st=com.google.maps.preview.copy',
    priceRange: '$$',
    comments: ['Good music', 'Convenient location', 'Fun place'],
  },
  {
    id: 3,
    name: 'Q Bar Mağusa',
    place: 'Roundabout',
    googleMapsUrl: 'https://maps.app.goo.gl/Yb4rxVEXGZPgChUd7?g_st=com.google.maps.preview.copy',
    priceRange: '$',
    comments: ['Quality cocktail', 'Good live music', 'Good security'],
  },
  {
    id: 4,
    name: 'Passage N.199',
    place: 'Roundabout',
    googleMapsUrl: 'https://maps.app.goo.gl/qjb9wLoPmGK5ExYd8?g_st=com.google.maps.preview.copy',
    priceRange: '$$',
    comments: ['Live music', 'Good cocktails', 'Premium shisha'],
  },
  {
    id: 5,
    name: 'Shelby Bar',
    place: 'Roundabout',
    googleMapsUrl: 'https://maps.app.goo.gl/9qjzpfxcme1hNThq5?g_st=com.google.maps.preview.copy',
    priceRange: '$$',
    comments: ['Convenient location', 'Good music', 'Alcohol'],
  },
  {
    id: 6,
    name: 'The Shamrock',
    place: 'Kaliland',
    googleMapsUrl: 'https://maps.app.goo.gl/r55fwNEtBGcQCk188?g_st=com.google.maps.preview.copy',
    priceRange: '$$$',
    comments: ['Bowling, pool and football matches', 'Great foods and cocktails', 'Good shisha'],
  },
  {
    id: 7,
    name: 'De Molay Bar',
    place: 'Walled City',
    googleMapsUrl: 'https://maps.app.goo.gl/4MCJsuxoafFzQBrbA?g_st=com.google.maps.preview.copy',
    priceRange: '$$',
    comments: ['Chill and cozy atmosphere', 'Good shows and live music', 'Quality cocktails'],
  },
  {
    id: 8,
    name: 'Monks Inn',
    place: 'Walled City',
    googleMapsUrl: 'https://maps.app.goo.gl/GVFWNxBg3jjpRFTQ8?g_st=com.google.maps.preview.copy',
    priceRange: '$$',
    comments: ['Premium cocktails', 'Chill environment', 'Good outside sitting area'],
  },
  {
    id: 9,
    name: 'Caterina Cornaro House',
    place: 'Walled City',
    googleMapsUrl: 'https://maps.app.goo.gl/BX3zzVKMG63zUDTf8?g_st=com.google.maps.preview.copy',
    priceRange: '$$$',
    comments: ['Premium cocktails', 'Beautiful atmosphere and environment', 'Good location'],
  },
  {
    id: 10,
    name: 'Hamam Inn Bar',
    place: 'Walled City',
    googleMapsUrl: 'https://maps.app.goo.gl/YqufdNwXCT1kG1bA9?g_st=com.google.maps.preview.copy',
    priceRange: '$$',
    comments: ['Live music', 'Quality cocktails', 'Relaxing outdoor sitting area'],
  },
  {
    id: 11,
    name: '42 Café & Bar',
    place: 'Walled City',
    googleMapsUrl: 'https://maps.app.goo.gl/VhnANgDCY5UAhfP3A?g_st=com.google.maps.preview.copy',
    priceRange: '$',
    comments: ['Wonderful wall art', 'Chill and relaxing environment', 'Pool'],
  },
  {
    id: 12,
    name: 'Rave Club',
    place: 'Walled City',
    googleMapsUrl: 'https://maps.app.goo.gl/29jZ8oAKYzqPcH2K8?g_st=com.google.maps.preview.copy',
    priceRange: '$$',
    comments: ['Quality music', 'Free parking lot', 'Good atmosphere'],
  },
  {
    id: 13,
    name: 'Lion’s Garden',
    place: 'Tuzla',
    googleMapsUrl: 'https://maps.app.goo.gl/Fp6biTHNv3QSVCpZ7?g_st=com.google.maps.preview.copy',
    priceRange: '$$$',
    comments: ['Good live music', 'Quality shows', 'Nice staff'],
  },
  {
    id: 14,
    name: 'EMU Beach Club',
    place: 'Tuzla',
    googleMapsUrl: 'https://maps.app.goo.gl/gR4kMz4rD9ThAUWq7?g_st=com.google.maps.preview.copy',
    priceRange: '$',
    comments: ['Clean sea', 'Good quality foods and service', 'Friendly-kind'],
  },
  {
    id: 15,
    name: 'Loof Beach',
    place: 'Glapsides',
    googleMapsUrl: 'https://maps.app.goo.gl/WLA1SxSfe4sYHi61A?g_st=com.google.maps.preview.copy',
    priceRange: '$$$',
    comments: ['Clean sea', 'Good quality coffee and foods', 'Amazing shows and outdoor cinema'],
  },
  {
    id: 16,
    name: 'Citymall Cinema',
    place: 'Citymall AVM',
    googleMapsUrl: 'https://maps.google.com?q=City%20Mall,%20%C5%9Eht.%20%C4%B0brahim%20Kaz%C4%B1m%20Cd,%20Gazima%C4%9Fusa%2099450&ftid=0x14dfc9c8574dd179:0xa7392eff52e0b638&entry=gps&lucs=,94213531,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_st=com.google.maps.preview.copy',
    priceRange: '$$$',
    comments: ['Good popcorn', 'Quality saloons and voice systems', 'Friendly-kind'],
  },
]
export default function EntertainmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Entertainment in EMU</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entertainments.map((ent) => (
          <div key={ent.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">{ent.name}</h2>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                <a 
                  href={ent.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center text-blue-600"
                >
                  {ent.place}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </p>
              <p className="flex items-center text-green-600 font-semibold">
                <Banknote className="w-4 h-4 mr-2" />
                {ent.priceRange}
              </p>
              <div className="mt-4">
                <h3 className="font-semibold flex items-center mb-2 text-gray-700">
                  <MessageSquare className="w-4 h-4 mr-2 text-gray-500" />
                  Comments
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {ent.comments.map((comment, index) => (
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