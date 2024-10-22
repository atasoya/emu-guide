import Link from "next/link";
import { ArrowLeft, ExternalLink, Bus, CarTaxiFront } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ulaşım",
};

interface Transportation {
  id: number;
  name: string;
  type: string;
  explanation: string;
  officialLink: string;
}

const transportations: Transportation[] = [
  {
    id: 1,
    name: "DAÜ Servis Hizmeti",
    type: "bus",
    explanation:
      "Öğrenciler için kampüs ve şehir merkezi arasında ücretsiz servis hizmeti.",
    officialLink: "https://transportation.emu.edu.tr/en/bus-services",
  },
  {
    id: 2,
    name: "İtimat",
    type: "bus",
    explanation: "Lefkoşa'ya her saat özel otobüs servisi.",
    officialLink: "https://itimatgroup.com/toplu-ta%C5%9Fima",
  },
  {
    id: 2,
    name: "KIB-HAS",
    type: "bus",
    explanation: "Havaalanına gidip gelmek için otobüs servisi.",
    officialLink: "http://kibhas.org/",
  },
  {
    id: 3,
    name: "Kıbrıs Taksi",
    type: "taxi",
    explanation: "Her türlü ihtiyacınız için taksi hizmeti.",
    officialLink: "https://taksikktc.com/",
  },
];

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sayfaya Geri Dön
      </Link>
      <h1 className="text-3xl font-bold mb-6">DAÜ Ulaşım Seçenekleri</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transportations.map((transport) => (
          <div
            key={transport.id}
            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
              {transport.type === "bus" ? (
                <Bus className="w-5 h-5 mr-2 text-gray-500" />
              ) : (
                <CarTaxiFront className="w-5 h-5 mr-2 text-gray-500" />
              )}
              {transport.name}
            </h2>
            <p className="text-gray-600 mb-4">{transport.explanation}</p>
            <a
              href={transport.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center font-semibold"
            >
              Resmi Sayfa
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
