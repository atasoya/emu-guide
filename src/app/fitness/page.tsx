import Link from 'next/link'
import { ArrowLeft, MapPin, ExternalLink, Banknote, PhoneCall, Dumbbell } from 'lucide-react'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Fitness',
}

interface FitnessCenter {
  id: number
  name: string
  location: string
  googleMapsUrl: string
  contactLink: string
  priceScale: '$' | '$$' | '$$$'
}

const fitnessCenters: FitnessCenter[] = [
  {
    id: 1,
    name: "EMU Gym",
    location: "EMU Campus",
    googleMapsUrl: "https://maps.app.goo.gl/orWsnyyazWnQ7eKG6",
    contactLink: "tel:+903926301234",
    priceScale: "$"
  },
  {
    id: 2,
    name: "FitArt Health & Fitness",
    location: "Pop Art",
    googleMapsUrl: "https://maps.app.goo.gl/9nxK6mV3AGX9T1cv7",
    contactLink: "tel:+903924443676",
    priceScale: "$$"
  },
  {
    id: 3,
    name: "M8 Fitness Center",
    location: "Nural Dormitory",
    googleMapsUrl: "https://maps.app.goo.gl/NCYim4RwZck4fxy3A",
    contactLink: "tel:+905338305010",
    priceScale: "$$"
  },
  {
    id: 4,
    name: "Ripped Fit",
    location: "Grand Aras",
    googleMapsUrl: "https://maps.app.goo.gl/rBgd6325Lt6ZLnkJ6",
    contactLink: "tel:+905338766222",
    priceScale: "$$"
  },
  {
    id: 5,
    name: "Fit Academy",
    location: "Sosyal Konutlar",
    googleMapsUrl: "https://maps.app.goo.gl/qUbpH6e7Ga5b1cDQ6",
    contactLink: "tel:+905338766222",
    priceScale: "$$"
  },
  {
    id: 6,
    name: "Fit Plus Premier",
    location: "NorthernLAND Premier",
    googleMapsUrl: "https://maps.app.goo.gl/Rdjc48HWVFvXVqsB6",
    contactLink: "tel:+903924444443",
    priceScale: "$$$"
  },
  {
    id: 7,
    name: "Gymaholic",
    location: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/eDwVLzjomcbBwJWg6",
    contactLink: "tel:+903923652929",
    priceScale: "$$$"
  },
  {
    id: 8,
    name: "Power Gym",
    location: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/JN3YHJDdJLzS133r8",
    contactLink: "tel:+905338862428",
    priceScale: "$$"
  },
  {
    id: 9,
    name: "Euro Sinemis",
    location: "MAGEM",
    googleMapsUrl: "https://maps.app.goo.gl/4v2KP5Q75RffmQcn6",
    contactLink: "tel:+905338641120",
    priceScale: "$$"
  },
  {
    id: 10,
    name: "Fit-Bull Gym",
    location: "Önder",
    googleMapsUrl: "https://maps.app.goo.gl/Lq1ngAXYy6Awvkza6",
    contactLink: "tel:+905338835325",
    priceScale: "$$"
  },
]

export default function FitnessPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Fitness Centers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fitnessCenters.map((center) => (
          <div key={center.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 transition-shadow duration-200 hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900">
              <Dumbbell className="w-5 h-5 mr-2 text-blue-500" />
              {center.name}
            </h2>
            <div className="space-y-3">
              <p className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2 " />
                <a 
                  href={center.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  {center.location}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </p>
              <p className="flex items-center text-gray-600">
                <PhoneCall className="w-4 h-4 mr-2" />
                <a 
                  href={center.contactLink}
                  className="hover:underline"
                >
                  Contact
                </a>
              </p>
              <p className="flex items-center text-green-600 font-semibold">
                <Banknote className="w-4 h-4 mr-2" />
                {center.priceScale}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
