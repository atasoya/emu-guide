import Link from 'next/link'
import { ArrowLeft, ExternalLink, Users } from 'lucide-react'

interface Community {
  id: number
  name: string
  platform: string
  explanation: string
  link: string
}

const communities: Community[] = [
  {
    id: 1,
    name: "UltrAslan DAÜ",
    platform: "Hepsi",
    explanation: "Galatasaray taraftarlarının bir araya geldiği, favori futbol kulüplerini destekledikleri, güncellemeler paylaştıkları ve etkinlikler düzenledikleri DAÜ'deki canlı bir topluluk.",
    link: "https://bento.me/ultraslanunidau?fbclid=PAZXh0bgNhZW0CMTEAAaZHV2CbKzeLeEX9B3uofXFnM7PzBJj0tmoxwVL7x_b5aDDo0hu-8841zlc_aem_xkF3uhrH73hU0yIV11VRBA"
  },
  {
    id: 2,
    name: "DaüFeb",
    platform: "Instagram",
    explanation: "Fenerbahçe taraftarları için DAÜ'deki Instagram tabanlı bir topluluk. Kulüple ilgili haberler, güncellemeler ve tartışmalar sunar.",
    link: "https://www.instagram.com/daufeb2001?igsh=MW4xdnhwNDdraWcyeQ=="
  },
  {
    id: 3,
    name: "DaüBjk",
    platform: "Instagram",
    explanation: "Beşiktaş taraftarlarının DAÜ'de bir araya geldiği, haberleri paylaştığı ve taraftar etkinlikleri organize ettiği bir Instagram topluluğu.",
    link: "https://www.instagram.com/daubjk?igsh=MWl4am1weDB1a3N6eA=="
  },
  {
    id: 4,
    name: "Emuprovince",
    platform: "WhatsApp",
    explanation: "Akademik konulardan sosyal etkinliklere kadar çeşitli konuları tartışmak ve DAÜ'den benzer ilgi alanlarına sahip kişilerle tanışmak için WhatsApp gruplarımıza katılın.",
    link: "https://chat.whatsapp.com/DuxUqjZcYEQ2HpGP91dM7v"
  },
  {
    id: 5,
    name: "EMU E-Sports",
    platform: "Discord",
    explanation: "DAÜ'deki oyuncular ve e-spor meraklıları için bir Discord sunucusu. Oyun etkinliklerine, turnuvalara katılın ve favori e-spor başlıklarınız hakkında tartışın.",
    link: "https://discord.com/invite/hyu9jF8"
  },
  {
    id: 6,
    name: "EMU Software & AI",
    platform: "Hepsi",
    explanation: "DAÜ'de yazılım geliştirme ve yapay zeka alanına odaklanan bir topluluk. Tartışmalara katılın, projelerde işbirliği yapın ve en son teknoloji trendlerinden haberdar olun.",
    link: "https://linktr.ee/emusoft.ai"
  },
]



export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sayfaya Geri Dön
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">DAÜ Toplulukları</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community) => (
          <div key={community.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-gray-700" />
              {community.name}
            </h2>
            <p className="text-lg text-gray-700 mb-2">Platform: <span className="font-medium">{community.platform}</span></p>
            <p className="text-gray-600 mb-4">{community.explanation}</p>
            <a 
              href={community.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Topluluğa Katıl
              <ExternalLink className="w-4 h-4 ml-2 text-white" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
