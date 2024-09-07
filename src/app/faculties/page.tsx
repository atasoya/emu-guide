import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

interface Department {
  id: number
  name: string
  description: string
  officialPageUrl: string
}

const departments: Department[] = [
  {
    id: 1,
    name: "Architecture",
    description: "Focuses on architectural design, urban planning, and sustainable building practices.",
    officialPageUrl: "https://arch.emu.edu.tr"
  },
  {
    id: 2,
    name: "Arts & Sciences",
    description: "Offers a wide range of programs in natural sciences, social sciences, and humanities.",
    officialPageUrl: "https://fas.emu.edu.tr"
  },
  {
    id: 3,
    name: "Business & Economics",
    description: "Provides education in various business disciplines, economics, and management.",
    officialPageUrl: "https://be.emu.edu.tr"
  },
  {
    id: 4,
    name: "Communication and Media Studies",
    description: "Covers areas such as journalism, public relations, and digital media.",
    officialPageUrl: "https://fcms.emu.edu.tr"
  },
  {
    id: 5,
    name: "Dentistry",
    description: "Offers comprehensive education in dental sciences and clinical practice.",
    officialPageUrl: "https://dent.emu.edu.tr"
  },
  {
    id: 6,
    name: "Education",
    description: "Prepares future educators with modern teaching methodologies and practices.",
    officialPageUrl: "https://educ.emu.edu.tr"
  },
  {
    id: 7,
    name: "Engineering",
    description: "Covers various engineering disciplines including civil, electrical, and mechanical engineering.",
    officialPageUrl: "https://eng.emu.edu.tr"
  },
  {
    id: 8,
    name: "Health Sciences",
    description: "Focuses on various aspects of health care, including nursing and physiotherapy.",
    officialPageUrl: "https://shs.emu.edu.tr"
  },
  {
    id: 9,
    name: "Law",
    description: "Provides comprehensive legal education covering national and international law.",
    officialPageUrl: "https://law.emu.edu.tr"
  },
  {
    id: 10,
    name: "Medicine",
    description: "Offers medical education with a focus on both clinical practice and research.",
    officialPageUrl: "https://med.emu.edu.tr"
  },
  {
    id: 11,
    name: "Pharmacy",
    description: "Provides education in pharmaceutical sciences and pharmacy practice.",
    officialPageUrl: "https://pharm.emu.edu.tr"
  },
  {
    id: 12,
    name: "Tourism",
    description: "Focuses on hospitality management, tourism planning, and related fields.",
    officialPageUrl: "https://tourism.emu.edu.tr"
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">EMU Departments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{dept.name}</h2>
            <p className="text-gray-600 mb-4">{dept.description}</p>
            <a 
              href={dept.officialPageUrl}
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