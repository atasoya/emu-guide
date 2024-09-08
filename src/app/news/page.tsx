import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'News',
}
 


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
    title: "Orientation Days",
    content: "Details on the Orientation Days, organised for new students who have just started their university lives and joined the EMU Family, can be accessed via our internet page. You can also obtain all types of university-related information from the information desks set up on our campus.",
    date: "2024-09-7",
    followUpLink: "https://orientation.emu.edu.tr/DefaultEng.aspx"
  },
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">EMU News</h1>
      
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
