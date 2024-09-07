import Link from 'next/link'
import { ArrowLeft, Users, ExternalLink, Activity } from 'lucide-react'

interface Club {
  id: number
  name: string
  memberSize: 'low' | 'mid' | 'high'
  link: string
  activities: string[]
}

const clubs: Club[] = [
  {
    id: 1,
    name: "EMU Photography Club",
    memberSize: 'mid',
    link: "https://emu.edu.tr/clubs/photography",
    activities: ["Photo walks", "Exhibitions", "Workshops"]
  },
  {
    id: 2,
    name: "EMU Robotics Club",
    memberSize: 'high',
    link: "https://emu.edu.tr/clubs/robotics",
    activities: ["Robot building", "Coding sessions", "Competitions"]
  },
  {
    id: 3,
    name: "EMU Literature Club",
    memberSize: 'low',
    link: "https://emu.edu.tr/clubs/literature",
    activities: ["Book discussions", "Writing workshops", "Poetry nights"]
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">EMU Clubs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <div key={club.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{club.name}</h2>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                {club.memberSize === 'low' && <Users className="w-4 h-4" />}
                {club.memberSize === 'mid' && <><Users className="w-4 h-4" /><Users className="w-4 h-4" /></>}
                {club.memberSize === 'high' && <><Users className="w-4 h-4" /><Users className="w-4 h-4" /><Users className="w-4 h-4" /></>}
              </p>
              <p className="flex items-center text-blue-600">
                <ExternalLink className="w-4 h-4 mr-2" />
                <a 
                  href={club.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Club Page
                </a>
              </p>
              <div>
                <h3 className="font-semibold flex items-center mb-2">
                  <Activity className="w-4 h-4 mr-2" />
                  Activities
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {club.activities.map((activity, index) => (
                    <li key={index} className="text-sm text-gray-600">{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}