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
    title: "EMU Announces New Scholarship Program",
    content: "Eastern Mediterranean University has announced a new scholarship program for international students. The program aims to attract top talent from around the world and promote diversity on campus.",
    date: "2024-03-15",
    followUpLink: "/scholarships/new-program"
  },
  {
    id: 2,
    title: "Campus Cafeteria Introduces New Vegan Options",
    content: "In response to growing demand, the main campus cafeteria has expanded its menu to include a variety of vegan options. Students can now enjoy plant-based meals every day of the week.",
    date: "2024-03-10",
    followUpLink: "/cafeteria/vegan-menu"
  },
  {
    id: 3,
    title: "EMU Researchers Make Breakthrough in Renewable Energy",
    content: "A team of researchers from the EMU Engineering Department has made a significant breakthrough in solar energy efficiency. Their findings could lead to more affordable and effective solar panels.",
    date: "2024-03-05",
    followUpLink: "/research/solar-breakthrough"
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">EMU News</h1>
      <div className="space-y-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-gray-700 mb-4">{item.content}</p>
            <Link 
              href={item.followUpLink}
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
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