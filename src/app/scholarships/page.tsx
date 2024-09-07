import Link from 'next/link'
import { ArrowLeft, ExternalLink, GraduationCap } from 'lucide-react'

interface Scholarship {
  id: number
  name: string
  explanation: string
  officialLink: string
}

const scholarships: Scholarship[] = [
  {
    id: 1,
    name: "EMU Merit Scholarship",
    explanation: "Awarded to students with exceptional academic performance.",
    officialLink: "https://emu.edu.tr/scholarships/merit"
  },
  {
    id: 2,
    name: "International Student Scholarship",
    explanation: "Available for international students based on academic achievements.",
    officialLink: "https://emu.edu.tr/scholarships/international"
  },
  {
    id: 3,
    name: "Sports Excellence Scholarship",
    explanation: "For students with outstanding sports achievements.",
    officialLink: "https://emu.edu.tr/scholarships/sports"
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">EMU Scholarships</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
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
              Official Page
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}