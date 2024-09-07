import Link from 'next/link'
import { ArrowLeft, ExternalLink, Info } from 'lucide-react'

interface NewContent {
  id: number
  name: string
  text: string
  followUpLink: string
}

const newContents: NewContent[] = [
  {
    id: 1,
    name: "Registration Process",
    text: "Learn about the step-by-step registration process for new students.",
    followUpLink: "https://emu.edu.tr/new-students/registration"
  },
  {
    id: 2,
    name: "Campus Tour",
    text: "Take a virtual tour of the EMU campus and familiarize yourself with key locations.",
    followUpLink: "https://emu.edu.tr/virtual-tour"
  },
  {
    id: 3,
    name: "Student Services",
    text: "Discover the various student services available to support your academic journey.",
    followUpLink: "https://emu.edu.tr/student-services"
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">I am new to EMU</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newContents.map((content) => (
          <div key={content.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Info className="w-5 h-5 mr-2" />
              {content.name}
            </h2>
            <p className="text-gray-600 mb-4">{content.text}</p>
            <a 
              href={content.followUpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              Learn More
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}