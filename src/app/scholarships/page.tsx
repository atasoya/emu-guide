import Link from "next/link";
import { ArrowLeft, ExternalLink, GraduationCap } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scholarships",
};

interface Scholarship {
  id: number;
  name: string;
  explanation: string;
  officialLink: string;
}

const scholarships: Scholarship[] = [
  {
    id: 1,
    name: "International Student Scholarship",
    explanation:
      "Offered to international students with 50% or 25% tuition waivers based on academic merit. Competitive full scholarships are available at the undergraduate and PhD levels.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 2,
    name: "All-inclusive Scholarships",
    explanation:
      "For the top 1% of secondary school graduates, this covers tuition, accommodation, and meals. Applications are evaluated annually.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 3,
    name: "Tuition Fee Waivers",
    explanation:
      "Offered to top-performing undergraduate applicants. The waiver covers tuition for the regular duration of the program.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 4,
    name: "High Honor Award",
    explanation:
      "Granted to top 10 students in each faculty or school, based on GPA, offering cash awards based on minimum wage.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 5,
    name: "Sports Grant",
    explanation:
      "Full or partial tuition/accommodation grant for exceptional individual or team sports performance.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 6,
    name: "Student Assistantship",
    explanation:
      "Offers positions across faculties for students with GPA > 2.0, providing hourly stipends.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 7,
    name: "Research Assistantship",
    explanation:
      "Graduate students can apply for full or part-time positions that offer tuition waivers and salaries.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 8,
    name: "Sibling Discounts",
    explanation:
      "Discounts of 25%-75% for siblings studying at EMU. Postgraduate siblings can get a 10% discount.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 9,
    name: "TRNC Government Scholarship",
    explanation:
      "Scholarship for successful students applying through TRNC or Turkish consular missions.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
];

export default function ScholarshipsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-8">EMU Scholarships</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {scholarships.map((scholarship) => (
          <div
            key={scholarship.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-900">
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
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
