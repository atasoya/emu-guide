import Link from 'next/link'
import { ArrowLeft, ExternalLink, BookOpen } from 'lucide-react'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Rehberler',
}

interface Guide {
  id: number
  name: string
  text: string
  followUpLink: string
}

const guides: Guide[] = [
  {
    id: 1,
    name: "DAÜ Kampüsü'nde Yol Bulma",
    text: "DAÜ kampüsündeki önemli binalar ve tesisler dahil olmak üzere kampüste yolunuzu bulmanız için kapsamlı bir rehber.",
    followUpLink: "https://www.emu.edu.tr/campusmap"
  },
  {
    id: 2,
    name: "Mağusa'da Öğrenci Hayatı",
    text: "DAÜ öğrencisi olarak Mağusa'da yaşam hakkında bilmeniz gereken her şey, konaklamadan yerel cazibe merkezlerine kadar.",
    followUpLink: "https://www.emu.edu.tr/campus-life"
  },
  {
    id: 3,
    name: "Lefkoşa'ya Nasıl Gidilir?",
    text: "DAÜ'den Lefkoşa'ya gitmenin yolları, toplu taşıma seçenekleri ve seyahat ipuçları içeren bir rehber.",
    followUpLink: "https://transportation.emu.edu.tr/en/announcements?pid=64&t=nicosia-emu-nicosia-free-student-bus-services"
  }
]

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sayfaya Dön
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Rehberler</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide) => (
          <div key={guide.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
              {guide.name}
            </h2>
            <p className="text-gray-600 mb-6">{guide.text}</p>
            <a 
              href={guide.followUpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 font-bold py-2 px-4 rounded"
            >
              Daha Fazla Oku
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
