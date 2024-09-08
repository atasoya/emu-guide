import Link from 'next/link'
import { ArrowLeft, Users, ExternalLink, Activity } from 'lucide-react'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Clubs',
}

interface Club {
  id: number
  name: string
  memberSize?: 'low' | 'mid' | 'high'
  link?: string
  activities: string[]
}

const clubs: Club[] = [
  {
    id: 1,
    name: "EMU Photography Club",
    memberSize: "low",
    activities: ["Photo walks", "Exhibitions", "Workshops"]
  },
  {
    id: 2,
    name: "EMU Robotics Club",
    memberSize: "low",
    activities: ["Robot building", "Coding sessions", "Competitions"]
  },
  {
    id: 3,
    name: "EMU Literature Club",
    memberSize: "low",
    activities: ["Book discussions", "Writing workshops", "Poetry nights"]
  },
  {
    id: 4,
    name: "Software & AI Development Club",
    memberSize: "high",
    link: "https://www.instagram.com/emusoft.ai?igsh=cWJiaHljMGNjaG03",
    activities: ["Hackathons", "Seminars", "Workshops"]
  },
  {
    id: 5,
    name: "AIESEC",
    memberSize: "high",
    link: "https://www.instagram.com/easternmediterranean_ewa?igsh=ejJmeDBvZnc0bXM5",
    activities: ["Leadership workshops", "International internships", "Community projects"]
  },
  {
    id: 6,
    name: "Anime Club",
    memberSize: "low",
    activities: ["Anime screenings", "Manga discussions", "Cosplay events"]
  },
  {
    id: 7,
    name: "Astronomy and Space Sciences Club",
    memberSize: "mid",
    link: "https://www.instagram.com/emu.astronomyclub?igsh=MWlvcnJ2b2piNDZ5Mg==",
    activities: ["Stargazing nights", "Space seminars", "Telescope workshops"]
  },
  {
    id: 8,
    name: "Atatürk Ideology Club",
    memberSize: "low",
    activities: ["Historical talks", "National day celebrations", "Debates"]
  },
  {
    id: 9,
    name: "Flag Football Club",
    memberSize: "low",
    activities: ["Practice sessions", "Inter-university matches", "Team-building events"]
  },
  {
    id: 10,
    name: "Beşiktaş Fan Club",
    memberSize: "high",
    activities: ["Match viewings", "Fan gatherings", "Team-support activities"]
  },
  {
    id: 11,
    name: "Science and Philosophy Club",
    memberSize: "low",
    activities: ["Thought experiments", "Philosophical debates", "Scientific talks"]
  },
  {
    id: 12,
    name: "IT Club",
    memberSize: "low",
    activities: ["Tech seminars", "Coding hackathons", "Software development challenges"]
  },
  {
    id: 13,
    name: "EMU Search & Rescue Club",
    memberSize: "low",
    activities: ["Search and rescue training", "Emergency drills", "Public safety awareness events"]
  },
  {
    id: 14,
    name: "EMU Scientific Research Community",
    memberSize: "low",
    activities: ["Research projects", "Workshops", "Seminars on scientific research"]
  },
  {
    id: 15,
    name: "EMU Dent Club",
    memberSize: "mid",
    activities: ["Dental care workshops", "Community dental health projects", "Guest lectures"]
  },
  {
    id: 16,
    name: "EMU Sustainable Development Goals Club",
    memberSize: "low",
    activities: ["SDG workshops", "Environmental campaigns", "Community development projects"]
  },
  {
    id: 17,
    name: "Dance Community",
    memberSize: "high",
    activities: ["Dance practice sessions", "Dance competitions", "Workshops"]
  },
  {
    id: 18,
    name: "Mountaineering and Nature Sports Club",
    memberSize: "low",
    activities: ["Hiking", "Camping trips", "Climbing training"]
  },
  {
    id: 19,
    name: "Economics and Finance Club",
    memberSize: "low",
    activities: ["Economics seminars", "Finance workshops", "Case study competitions"]
  },
  {
    id: 20,
    name: "Electronic Sports Club",
    memberSize: "high",
    activities: ["E-sports tournaments", "Gaming workshops", "LAN parties"]
  },
  {
    id: 21,
    name: "Industrial Engineering Club",
    memberSize: "high",
    activities: ["Engineering workshops", "Seminars", "Competitions"]
  },
  {
    id: 22,
    name: "Fantastic Role Play Club",
    memberSize: "low",
    activities: ["Role-playing games", "Game nights", "Fantasy discussions"]
  },
  {
    id: 23,
    name: "Fenerbahçe Fan Club",
    memberSize: "high",
    activities: ["Match viewings", "Fan gatherings", "Merchandise distribution"]
  },
  {
    id: 24,
    name: "Idea and Debate Club",
    memberSize: "low",
    activities: ["Debates", "Idea exchange sessions", "Public speaking workshops"]
  },
  {
    id: 25,
    name: "Photography Club",
    memberSize: "low",
    activities: ["Photography walks", "Exhibitions", "Workshops"]
  },
  {
    id: 26,
    name: "Gastronomy Club",
    memberSize: "mid",
    activities: ["Cooking workshops", "Culinary competitions", "Guest chef events"]
  },
  {
    id: 27,
    name: "Genetics Club",
    memberSize: "low",
    activities: ["Genetics workshops", "Seminars", "Research discussions"]
  },
  {
    id: 28,
    name: "Entrepreneurship Club",
    memberSize: "high",
    activities: ["Business plan competitions", "Networking events", "Entrepreneurship workshops"]
  },
  {
    id: 29,
    name: "Fine Arts Club",
    memberSize: "low",
    activities: ["Art exhibitions", "Workshops", "Art appreciation sessions"]
  },
  {
    id: 30,
    name: "Folk Dance Community",
    memberSize: "low",
    activities: ["Dance practices", "Performances", "Workshops"]
  },
  {
    id: 31,
    name: "Animal Welfare Club",
    memberSize: "low",
    activities: ["Animal rescue projects", "Awareness campaigns", "Fundraising events"]
  },
  {
    id: 32,
    name: "Nursing Club",
    memberSize: "low",
    activities: ["Healthcare workshops", "Community health drives", "Seminars"]
  },
  {
    id: 33,
    name: "Law Club",
    memberSize: "mid",
    activities: ["Mock trials", "Law seminars", "Case studies"]
  },
  {
    id: 34,
    name: "Red Crescent Student Club",
    memberSize: "high",
    activities: ["Blood donation campaigns", "First aid training", "Humanitarian projects"]
  },
  {
    id: 35,
    name: "Mathematics Club",
    memberSize: "mid",
    activities: ["Math puzzles", "Seminars", "Workshops"]
  },
  {
    id: 36,
    name: "Media and Communication Club",
    memberSize: "low",
    activities: ["Media workshops", "Guest lectures", "Content creation projects"]
  },
  {
    id: 37,
    name: "Model United Nations Club",
    memberSize: "high",
    activities: ["MUN conferences", "Debates", "Workshops"]
  },
  {
    id: 38,
    name: "Music Club",
    memberSize: "low",
    activities: ["Music sessions", "Concerts", "Workshops"]
  },
  {
    id: 39,
    name: "Archery Club",
    memberSize: "low",
    activities: ["Practice sessions", "Competitions", "Workshops"]
  },
  {
    id: 40,
    name: "Game Design and Development Community",
    memberSize: "mid",
    activities: ["Game jams", "Workshops", "Coding sessions"]
  },
  {
    id: 41,
    name: "Psychology Students Club",
    memberSize: "mid",
    activities: ["Psychology workshops", "Seminars", "Research discussions"]
  },
  {
    id: 42,
    name: "Psychological Counseling and Guidance Club",
    memberSize: "low",
    activities: ["Counseling workshops", "Mental health awareness campaigns", "Group therapy sessions"]
  },
  {
    id: 43,
    name: "Chess Club",
    memberSize: "low",
    activities: ["Chess tournaments", "Practice sessions", "Strategy workshops"]
  },
  {
    id: 44,
    name: "Cinema Club",
    memberSize: "low",
    activities: ["Movie screenings", "Film discussions", "Film analysis workshops"]
  },
    {
    id: 45,
    name: "Underwater Sports Club",
    memberSize: "low",
    activities: ["Diving trips", "Scuba diving lessons", "Marine conservation projects"]
  },
  {
    id: 46,
    name: "Design Club",
    memberSize: "low",
    activities: ["Design workshops", "Portfolio reviews", "Creative projects"]
  },
  {
    id: 47,
    name: "Theatre Community",
    memberSize: "low",
    activities: ["Drama workshops", "Play performances", "Theatre competitions"]
  },
  {
    id: 48,
    name: "Tourism Club",
    memberSize: "low",
    activities: ["Tourism seminars", "Field trips", "Hospitality workshops"]
  },
  {
    id: 49,
    name: "International Relations Club",
    memberSize: "low",
    activities: ["Global issues seminars", "Diplomacy workshops", "Guest lectures"]
  },
  {
    id: 50,
    name: "Unicorn LGBT Club",
    memberSize: "low",
    activities: ["LGBTQ+ rights awareness campaigns", "Support group meetings", "Pride events"]
  },
  {
    id: 51,
    name: "Swimming Club",
    memberSize: "low",
    activities: ["Swimming lessons", "Competitions", "Training sessions"]
  },
  {
    id: 52,
    name: "ultrAslan EMU",
    memberSize: "high",
    activities: ["Match viewings", "Fan gatherings", "Sports events"]
  },
  {
    id: 53,
    name: "Environment and Natural Sciences Club",
    memberSize: "low",
    activities: ["Environmental cleanups", "Eco-awareness campaigns", "Nature walks"]
  },
  {
    id: 54,
    name: "Children's Rights Club",
    memberSize: "mid",
    activities: ["Children's rights awareness workshops", "Fundraising events", "School outreach programs"]
  },
  {
    id: 55,
    name: "Special Education Club",
    memberSize: "low",
    activities: ["Inclusive education workshops", "Special needs awareness campaigns", "Community outreach"]
  }
];

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">EMU Clubs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((club) => (
          <div key={club.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{club.name}</h2>
            <div className="space-y-4">
              {club.memberSize && (
                <p className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-2" />
                  {club.memberSize === 'low' && <Users className="w-5 h-5" />}
                  {club.memberSize === 'mid' && <><Users className="w-5 h-5" /><Users className="w-5 h-5" /></>}
                  {club.memberSize === 'high' && <><Users className="w-5 h-5" /><Users className="w-5 h-5" /><Users className="w-5 h-5" /></>}
                </p>
              )}
              {club.link && (
                <p className="flex items-center text-blue-600">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  <a 
                    href={club.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    Club Page
                  </a>
                </p>
              )}
              {club.activities.length > 0 && (
                <div>
                  <h3 className="font-semibold flex items-center mb-2">
                    <Activity className="w-5 h-5 mr-2" />
                    Activities
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                    {club.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}