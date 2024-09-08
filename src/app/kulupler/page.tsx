import Link from 'next/link'
import { ArrowLeft, Users, ExternalLink, Activity } from 'lucide-react'

interface Club {
  id: number
  name: string
  memberSize?: 'low' | 'mid' | 'high'
  link?: string
  activities: string[]
}

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Kulüpler',
}

const clubs: Club[] = [
  {
    id: 1,
    name: "DAÜ Fotoğrafçılık Kulübü",
    memberSize: "low",
    activities: ["Fotoğraf yürüyüşleri", "Sergiler", "Atölye çalışmaları"]
  },
  {
    id: 2,
    name: "DAÜ Robotik Kulübü",
    memberSize: "low",
    activities: ["Robot yapımı", "Kodlama seansları", "Yarışmalar"]
  },
  {
    id: 3,
    name: "DAÜ Edebiyat Kulübü",
    memberSize: "low",
    activities: ["Kitap tartışmaları", "Yazı atölyeleri", "Şiir geceleri"]
  },
  {
    id: 4,
    name: "Yazılım & AI Geliştirme Kulübü",
    memberSize: "high",
    link: "https://www.instagram.com/emusoft.ai?igsh=cWJiaHljMGNjaG03",
    activities: ["Hackathonlar", "Seminerler", "Atölye çalışmaları"]
  },
  {
    id: 5,
    name: "AIESEC",
    memberSize: "high",
    link: "https://www.instagram.com/easternmediterranean_ewa?igsh=ejJmeDBvZnc0bXM5",
    activities: ["Liderlik atölyeleri", "Uluslararası stajlar", "Topluluk projeleri"]
  },
  {
    id: 6,
    name: "Anime Kulübü",
    memberSize: "low",
    activities: ["Anime gösterimleri", "Manga tartışmaları", "Cosplay etkinlikleri"]
  },
  {
    id: 7,
    name: "Astronomi ve Uzay Bilimleri Kulübü",
    memberSize: "mid",
    link: "https://www.instagram.com/emu.astronomyclub?igsh=MWlvcnJ2b2piNDZ5Mg==",
    activities: ["Yıldız gözlemleri", "Uzay seminerleri", "Teleskop atölyeleri"]
  },
  {
    id: 8,
    name: "Atatürkçü Düşünce Kulübü",
    memberSize: "low",
    activities: ["Tarihsel konuşmalar", "Milli gün kutlamaları", "Tartışmalar"]
  },
  {
    id: 9,
    name: "Bayrak Futbolu Kulübü",
    memberSize: "low",
    activities: ["Antrenman seansları", "Üniversiteler arası maçlar", "Takım etkinlikleri"]
  },
  {
    id: 10,
    name: "Beşiktaş Taraftar Kulübü",
    memberSize: "high",
    activities: ["Maç izlemeleri", "Taraftar buluşmaları", "Takım destek etkinlikleri"]
  },
  {
    id: 11,
    name: "Bilim ve Felsefe Kulübü",
    memberSize: "low",
    activities: ["Düşünce deneyleri", "Felsefi tartışmalar", "Bilimsel konuşmalar"]
  },
  {
    id: 12,
    name: "Bilişim Kulübü",
    memberSize: "low",
    activities: ["Teknoloji seminerleri", "Kodlama hackathonları", "Yazılım geliştirme yarışmaları"]
  },
  {
    id: 13,
    name: "DAÜ Arama Kurtarma Kulübü",
    memberSize: "low",
    activities: ["Arama kurtarma eğitimleri", "Acil durum tatbikatları", "Kamu güvenliği farkındalık etkinlikleri"]
  },
  {
    id: 14,
    name: "DAÜ Bilimsel Araştırma Topluluğu",
    memberSize: "low",
    activities: ["Araştırma projeleri", "Atölyeler", "Bilimsel araştırma seminerleri"]
  },
  {
    id: 15,
    name: "DAÜ Diş Hekimliği Kulübü",
    memberSize: "mid",
    activities: ["Diş bakımı atölyeleri", "Toplumsal diş sağlığı projeleri", "Konuk konuşmalar"]
  },
  {
    id: 16,
    name: "DAÜ Sürdürülebilir Kalkınma Hedefleri Kulübü",
    memberSize: "low",
    activities: ["SKH atölyeleri", "Çevre kampanyaları", "Toplum kalkınma projeleri"]
  },
  {
    id: 17,
    name: "Dans Topluluğu",
    memberSize: "high",
    activities: ["Dans antrenmanları", "Dans yarışmaları", "Atölye çalışmaları"]
  },
  {
    id: 18,
    name: "Dağcılık ve Doğa Sporları Kulübü",
    memberSize: "low",
    activities: ["Doğa yürüyüşleri", "Kamp gezileri", "Tırmanış eğitimleri"]
  },
  {
    id: 19,
    name: "Ekonomi ve Finans Kulübü",
    memberSize: "low",
    activities: ["Ekonomi seminerleri", "Finans atölyeleri", "Vaka çalışması yarışmaları"]
  },
  {
    id: 20,
    name: "Elektronik Spor Kulübü",
    memberSize: "high",
    activities: ["E-spor turnuvaları", "Oyun atölyeleri", "LAN partileri"]
  },
  {
    id: 21,
    name: "Endüstri Mühendisliği Kulübü",
    memberSize: "high",
    activities: ["Mühendislik atölyeleri", "Seminerler", "Yarışmalar"]
  },
  {
    id: 22,
    name: "Fantastik Rol Yapma Kulübü",
    memberSize: "low",
    activities: ["Rol yapma oyunları", "Oyun geceleri", "Fantastik tartışmalar"]
  },
  {
    id: 23,
    name: "Fenerbahçe Taraftar Kulübü",
    memberSize: "high",
    activities: ["Maç izlemeleri", "Taraftar buluşmaları", "Merchandise dağıtımı"]
  },
  {
    id: 24,
    name: "Fikir ve Münazara Kulübü",
    memberSize: "low",
    activities: ["Münazaralar", "Fikir alışverişi seansları", "Topluluk önünde konuşma atölyeleri"]
  },
  {
    id: 25,
    name: "Fotoğrafçılık Kulübü",
    memberSize: "low",
    activities: ["Fotoğraf yürüyüşleri", "Sergiler", "Atölye çalışmaları"]
  },
  {
    id: 26,
    name: "Gastronomi Kulübü",
    memberSize: "mid",
    activities: ["Yemek atölyeleri", "Mutfak yarışmaları", "Konuk şef etkinlikleri"]
  },
  {
    id: 27,
    name: "Genetik Kulübü",
    memberSize: "low",
    activities: ["Genetik atölyeleri", "Seminerler", "Araştırma tartışmaları"]
  },
  {
    id: 28,
    name: "Girişimcilik Kulübü",
    memberSize: "high",
    activities: ["İş planı yarışmaları", "Ağ oluşturma etkinlikleri", "Girişimcilik atölyeleri"]
  },
  {
    id: 29,
    name: "Güzel Sanatlar Kulübü",
    memberSize: "low",
    activities: ["Sanat sergileri", "Atölyeler", "Sanat takdir seansları"]
  },
  {
    id: 30,
    name: "Halk Dansları Topluluğu",
    memberSize: "low",
    activities: ["Dans antrenmanları", "Gösteriler", "Atölye çalışmaları"]
  },
  {
    id: 31,
    name: "Hayvan Hakları Kulübü",
    memberSize: "low",
    activities: ["Hayvan kurtarma projeleri", "Farkındalık kampanyaları", "Bağış toplama etkinlikleri"]
  },
  {
    id: 32,
    name: "Hemşirelik Kulübü",
    memberSize: "low",
    activities: ["Sağlık atölyeleri", "Toplumsal sağlık kampanyaları", "Seminerler"]
  },
  {
    id: 33,
    name: "Hukuk Kulübü",
    memberSize: "mid",
    activities: ["Duruşma simülasyonları", "Hukuk seminerleri", "Vaka çalışmaları"]
  },
  {
    id: 34,
    name: "Kızılay Öğrenci Kulübü",
    memberSize: "high",
    activities: ["Kan bağışı kampanyaları", "İlk yardım eğitimleri", "İnsani yardım projeleri"]
  },
  {
    id: 35,
    name: "Matematik Kulübü",
    memberSize: "mid",
    activities: ["Matematik bulmacaları", "Seminerler", "Atölyeler"]
  },
  {
    id: 36,
    name: "Medya ve İletişim Kulübü",
    memberSize: "low",
    activities: ["Medya atölyeleri", "Konuk konuşmaları", "İçerik üretimi projeleri"]
  },
  {
    id: 37,
    name: "Model Birleşmiş Milletler Kulübü",
    memberSize: "high",
    activities: ["MUN konferansları", "Münazaralar", "Atölyeler"]
  },
  {
    id: 38,
    name: "Müzik Kulübü",
    memberSize: "low",
    activities: ["Müzik seansları", "Konserler", "Atölyeler"]
  },
  {
    id: 39,
    name: "Okçuluk Kulübü",
    memberSize: "low",
    activities: ["Antrenman seansları", "Yarışmalar", "Atölyeler"]
  },
  {
    id: 40,
    name: "Oyun Tasarım ve Geliştirme Topluluğu",
    memberSize: "mid",
    activities: ["Oyun geliştirme kampları", "Atölyeler", "Kodlama seansları"]
  },
  {
    id: 41,
    name: "Psikoloji Öğrencileri Kulübü",
    memberSize: "mid",
    activities: ["Psikoloji atölyeleri", "Seminerler", "Araştırma tartışmaları"]
  },
  {
    id: 42,
    name: "Psikolojik Danışmanlık ve Rehberlik Kulübü",
    memberSize: "low",
    activities: ["Danışmanlık atölyeleri", "Ruh sağlığı farkındalık kampanyaları", "Grup terapisi seansları"]
  },
  {
    id: 43,
    name: "Satranç Kulübü",
    memberSize: "low",
    activities: ["Satranç turnuvaları", "Antrenman seansları", "Strateji atölyeleri"]
  },
  {
    id: 44,
    name: "Sinema Kulübü",
    memberSize: "low",
    activities: ["Film gösterimleri", "Film tartışmaları", "Film analizi atölyeleri"]
  },
  {
    id: 45,
    name: "Sualtı Sporları Kulübü",
    memberSize: "low",
    activities: ["Dalış gezileri", "Dalgıçlık dersleri", "Deniz koruma projeleri"]
  },
  {
    id: 46,
    name: "Tasarım Kulübü",
    memberSize: "low",
    activities: ["Tasarım atölyeleri", "Portfolyo incelemeleri", "Yaratıcı projeler"]
  },
  {
    id: 47,
    name: "Tiyatro Topluluğu",
    memberSize: "low",
    activities: ["Drama atölyeleri", "Tiyatro performansları", "Tiyatro yarışmaları"]
  },
  {
    id: 48,
    name: "Turizm Kulübü",
    memberSize: "low",
    activities: ["Turizm seminerleri", "Saha gezileri", "Konuk ağırlama atölyeleri"]
  },
  {
    id: 49,
    name: "Uluslararası İlişkiler Kulübü",
    memberSize: "low",
    activities: ["Küresel sorunlar seminerleri", "Diplomasi atölyeleri", "Konuk konuşmaları"]
  },
  {
    id: 50,
    name: "Unicorn LGBT Kulübü",
    memberSize: "low",
    activities: ["LGBTQ+ hakları farkındalık kampanyaları", "Destek grubu toplantıları", "Onur etkinlikleri"]
  },
  {
    id: 51,
    name: "Yüzme Kulübü",
    memberSize: "low",
    activities: ["Yüzme dersleri", "Yarışmalar", "Antrenman seansları"]
  },
  {
    id: 52,
    name: "ultrAslan DAÜ",
    memberSize: "high",
    activities: ["Maç izlemeleri", "Taraftar buluşmaları", "Spor etkinlikleri"]
  },
  {
    id: 53,
    name: "Çevre ve Doğa Bilimleri Kulübü",
    memberSize: "low",
    activities: ["Çevre temizliği", "Eko-farkındalık kampanyaları", "Doğa yürüyüşleri"]
  },
  {
    id: 54,
    name: "Çocuk Hakları Kulübü",
    memberSize: "mid",
    activities: ["Çocuk hakları farkındalık atölyeleri", "Bağış toplama etkinlikleri", "Okul programları"]
  },
  {
    id: 55,
    name: "Özel Eğitim Kulübü",
    memberSize: "low",
    activities: ["Kapsayıcı eğitim atölyeleri", "Özel gereksinimler farkındalık kampanyaları", "Toplum hizmetleri"]
  }
];

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sayfaya Geri Dön
      </Link>
      <h1 className="text-3xl font-bold mb-6">DAÜ Kulüpleri</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((club) => (
          <div key={club.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{club.name}</h2>
            <div className="space-y-4">
              {club.memberSize && (
                <p className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-2" />
                  {club.memberSize === 'low' && <Users className="w-5 h-5" />}
                  {club.memberSize === 'mid' && <><Users className="w-5 h-5" /><Users className="w-5 h-5" /></>}
                  {club.memberSize === 'high' && <><Users className="w-5 h-5" /><Users className="w-5 h-5" /><Users className="w-5 h-5" /></>}
                </p>
              )}
              {club.link && (
                <p className="flex items-center text-blue-600">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  <a 
                    href={club.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    Kulüp Sayfası
                  </a>
                </p>
              )}
              {club.activities.length > 0 && (
                <div>
                  <h3 className="font-semibold flex items-center mb-2">
                    <Activity className="w-5 h-5 mr-2" />
                    Aktiviteler
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                    {club.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
