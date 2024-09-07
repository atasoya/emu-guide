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
    name: "EMU International Students",
    platform: "Facebook",
    explanation: "A group for international students to connect and share experiences.",
    link: "https://facebook.com/groups/emu-international-students"
  },
  {
    id: 2,
    name: "EMU Computer Science",
    platform: "Discord",
    explanation: "Discord server for CS students to collaborate and seek help.",
    link: "https://discord.gg/emu-cs"
  },
  {
    id: 3,
    name: "EMU Sports Enthusiasts",
    platform: "WhatsApp",
    explanation: "WhatsApp group for organizing sports events and activities.",
    link: "https://chat.whatsapp.com/emu-sports"
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">EMU Communities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community) => (
          <div key={community.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              {community.name}
            </h2>
            <p className="text-gray-600 mb-2">Platform: {community.platform}</p>
            <p className="text-gray-600 mb-4">{community.explanation}</p>
            <a 
              href={community.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              Join Community
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}