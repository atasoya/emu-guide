import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react'

interface NewsItem {
  id: number
  title: string
  content: string
  date: string
  followUpLink: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Oryantasyon Günleri",
    content: "Yeni öğrencilerimizin üniversite yaşamına başlamaları ve DAÜ ailesine katılmaları dolayısıyla düzenlenen Oryantasyon Günleri ile ilgili detayları internet sayfamızdan öğrenebilir, kampüs içerisine kurulan danışma masalarından her türlü bilgiye ulaşabilirsiniz.",
    date: "2024-09-7",
    followUpLink: "https://orientation.emu.edu.tr/Default.aspx"
  },
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sayfaya Geri Dön
      </Link>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">DAÜ Haberleri</h1>
      
      <div className="space-y-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h2>
            <p className="text-gray-500 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-gray-400" />
              <span className="text-gray-600">
                {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">{item.content}</p>
            <Link 
              href={item.followUpLink}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Read more
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
