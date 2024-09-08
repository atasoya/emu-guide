import Link from 'next/link'
import { ArrowLeft, ExternalLink, GraduationCap } from 'lucide-react'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Burslar',
}

interface Scholarship {
  id: number
  name: string
  explanation: string
  officialLink: string
}

const scholarships: Scholarship[] = [
  {
    id: 1,
    name: "Uluslararası Öğrenci Bursu",
    explanation: "Akademik başarıya dayalı olarak uluslararası öğrencilere %50 veya %25 öğrenim ücreti indirimleri sunulmaktadır. Lisans ve doktora düzeyinde rekabetçi tam burslar da mevcuttur.",
    officialLink: "https://io.emu.edu.tr/en/students/prospective-students/scholarships"
  },
  {
    id: 2,
    name: "Her Şey Dahil Burslar",
    explanation: "Ortaokul mezunlarının en üst %1'ine verilen burs, öğrenim ücretini, konaklamayı ve yemekleri kapsar. Başvurular yıllık olarak değerlendirilir.",
    officialLink: "https://io.emu.edu.tr/en/students/prospective-students/scholarships"
  },
  {
    id: 3,
    name: "Öğrenim Ücreti Muafiyetleri",
    explanation: "Lisans başvuru sahipleri arasında en yüksek performans gösterenlere sunulan öğrenim ücreti muafiyetidir.",
    officialLink: "https://io.emu.edu.tr/en/students/prospective-students/scholarships"
  },
  {
    id: 4,
    name: "Yüksek Onur Ödülü",
    explanation: "Her fakülte veya okulda en yüksek GPA'ya sahip ilk 10 öğrenciye, asgari ücrete göre nakit ödüller verilir.",
    officialLink: "https://io.emu.edu.tr/en/students/prospective-students/scholarships"
  },
  {
    id: 5,
    name: "Spor Bursu",
    explanation: "Bireysel veya takım sporlarında olağanüstü performans sergileyen öğrencilere tam veya kısmi öğrenim/konaklama bursu sunulur.",
    officialLink: "https://io.emu.edu.tr/en/students/prospective-students/scholarships"
  },
  {
    id: 6,
    name: "Öğrenci Asistanlığı",
    explanation: "2.0 üzerinde GPA'ye sahip öğrencilere fakültelerde saatlik maaş karşılığında pozisyonlar sunulur.",
    officialLink: "https://io.emu.edu.tr/en/students/prospective-students/scholarships"
  },
  {
    id: 7,
    name: "Araştırma Asistanlığı",
    explanation: "Lisansüstü öğrenciler, öğrenim ücreti muafiyetleri ve maaş sunan tam veya yarı zamanlı pozisyonlara başvurabilirler.",
    officialLink: "https://io.emu.edu.tr/en/students/prospective-students/scholarships"
  },
  {
    id: 8,
    name: "Kardeş İndirimi",
    explanation: "DAÜ'de öğrenim gören kardeşlere %25-%75 oranında indirim sağlanır. Lisansüstü kardeşler %10 indirim alabilir.",
    officialLink: "https://io.emu.edu.tr/en/students/prospective-students/scholarships"
  },
  {
    id: 9,
    name: "KKTC Hükümeti Bursu",
    explanation: "KKTC veya Türkiye konsoloslukları aracılığıyla başarılı öğrenciler için burs başvurusu yapılabilir.",
    officialLink: "https://io.emu.edu.tr/en/students/prospective-students/scholarships"
  }
]


export default function ScholarshipsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Ana Sayfaya Geri Dön
      </Link>
      <h1 className="text-3xl font-bold mb-8">DAÜ Bursları</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900">
              <GraduationCap className="w-5 h-5 mr-2" />
              {scholarship.name}
            </h2>
            <p className="text-gray-600 mb-4">{scholarship.explanation}</p>
            <a 
              href={scholarship.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              Resmi Sayfa
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
