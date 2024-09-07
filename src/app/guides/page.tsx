import Link from 'next/link'
import { ArrowLeft, ExternalLink, BookOpen } from 'lucide-react'

interface Guide {
  id: number
  name: string
  text: string
  followUpLink: string
}

const guides: Guide[] = [
  {
    id: 1,
    name: "Navigating EMU Campus",
    text: "A comprehensive guide to finding your way around the EMU campus, including key buildings and facilities.",
    followUpLink: "https://emu.edu.tr/guides/campus-navigation"
  },
  {
    id: 2,
    name: "Student Life in Famagusta",
    text: "Everything you need to know about living in Famagusta as an EMU student, from accommodation to local attractions.",
    followUpLink: "https://emu.edu.tr/guides/student-life-famagusta"
  },
  {
    id: 3,
    name: "Academic Resources",
    text: "A guide to all the academic resources available to EMU students, including libraries, online databases, and study spaces.",
    followUpLink: "https://emu.edu.tr/guides/academic-resources"
  }
]

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">EMU Student Guides</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <div key={guide.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              {guide.name}
            </h2>
            <p className="text-gray-600 mb-4">{guide.text}</p>
            <a 
              href={guide.followUpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              Read More
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}