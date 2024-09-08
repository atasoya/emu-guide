import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Fakülteler',
}

interface Department {
  id: number
  name: string
  description: string
  officialPageUrl: string
}

const departments: Department[] = [
  {
    id: 1,
    name: "Mimarlık",
    description: "Mimari tasarım, kentsel planlama ve sürdürülebilir bina uygulamaları üzerine odaklanır.",
    officialPageUrl: "https://arch.emu.edu.tr"
  },
  {
    id: 2,
    name: "Fen ve Edebiyat",
    description: "Doğa bilimleri, sosyal bilimler ve beşeri bilimlerde geniş bir program yelpazesi sunar.",
    officialPageUrl: "https://fas.emu.edu.tr"
  },
  {
    id: 3,
    name: "İşletme ve Ekonomi",
    description: "Çeşitli iş disiplinlerinde, ekonomi ve yönetimde eğitim sunar.",
    officialPageUrl: "https://be.emu.edu.tr"
  },
  {
    id: 4,
    name: "İletişim ve Medya Çalışmaları",
    description: "Gazetecilik, halkla ilişkiler ve dijital medya gibi alanları kapsar.",
    officialPageUrl: "https://fcms.emu.edu.tr"
  },
  {
    id: 5,
    name: "Diş Hekimliği",
    description: "Diş hekimliği bilimleri ve klinik uygulamalarda kapsamlı eğitim sunar.",
    officialPageUrl: "https://dent.emu.edu.tr"
  },
  {
    id: 6,
    name: "Eğitim",
    description: "Gelecek öğretmenleri modern öğretim metodolojileri ve uygulamaları ile hazırlar.",
    officialPageUrl: "https://educ.emu.edu.tr"
  },
  {
    id: 7,
    name: "Mühendislik",
    description: "İnşaat, elektrik ve makine mühendisliği gibi çeşitli mühendislik disiplinlerini kapsar.",
    officialPageUrl: "https://eng.emu.edu.tr"
  },
  {
    id: 8,
    name: "Sağlık Bilimleri",
    description: "Hemşirelik ve fizyoterapi gibi sağlık hizmetlerinin çeşitli yönlerine odaklanır.",
    officialPageUrl: "https://shs.emu.edu.tr"
  },
  {
    id: 9,
    name: "Hukuk",
    description: "Ulusal ve uluslararası hukuk üzerine kapsamlı bir hukuk eğitimi sunar.",
    officialPageUrl: "https://law.emu.edu.tr"
  },
  {
    id: 10,
    name: "Tıp",
    description: "Klinik uygulama ve araştırma odaklı tıp eğitimi sunar.",
    officialPageUrl: "https://med.emu.edu.tr"
  },
  {
    id: 11,
    name: "Eczacılık",
    description: "Farmasötik bilimler ve eczane uygulamaları üzerine eğitim sunar.",
    officialPageUrl: "https://pharm.emu.edu.tr"
  },
  {
    id: 12,
    name: "Turizm",
    description: "Konaklama yönetimi, turizm planlaması ve ilgili alanlara odaklanır.",
    officialPageUrl: "https://tourism.emu.edu.tr"
  }
]

export default function DepartmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sayfaya Geri Dön
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-gray-900">DAÜ Bölümleri</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{dept.name}</h2>
            <p className="text-gray-600 mb-6">{dept.description}</p>
            <a 
              href={dept.officialPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 font-bold py-2 px-4 rounded"
            >
              Resmi Sayfa
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
