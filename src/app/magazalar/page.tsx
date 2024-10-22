import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Tag,
  Laptop,
  Shirt,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mağazalar",
};

interface Store {
  id: number;
  name: string;
  type: string;
  place: string;
  googleMapsUrl: string;
}

const stores: Store[] = [
  {
    id: 1,
    name: "Durmazz Bilgisayar",
    type: "Teknoloji",
    place: "İsmet İnönü Caddesi",
    googleMapsUrl: "https://maps.app.goo.gl/rvaj4X9WcdcJNUqj6",
  },
  {
    id: 2,
    name: "OWL Giyim",
    type: "Giyim",
    place: "Dönel Kavşak",
    googleMapsUrl: "https://maps.app.goo.gl/JZzbbSVyAfJdPwtZ8",
  },
  {
    id: 3,
    name: "Cha Cha",
    type: "Giyim",
    place: "Dönel Kavşak",
    googleMapsUrl: "https://maps.app.goo.gl/HUNA6Y31PyBUdSmC9",
  },
  {
    id: 4,
    name: "Sezai Kaliteli Telefonlar",
    type: "Teknoloji",
    place: "İsmet İnönü Caddesi",
    googleMapsUrl: "https://maps.app.goo.gl/7LkF3uPEZwCDMbz29",
  },
  {
    id: 5,
    name: "Pure Bling Kuyumculuk",
    type: "Kuyumculuk",
    place: "İsmet İnönü Caddesi",
    googleMapsUrl: "https://maps.app.goo.gl/vKMiW2iP9qRZuzv89",
  },
  {
    id: 6,
    name: "Mavi Jeans",
    type: "Giyim",
    place: "İsmet İnönü Caddesi",
    googleMapsUrl: "https://maps.app.goo.gl/yVmNPVqgqTWkyMmd8",
  },
  {
    id: 7,
    name: "Exbi Döviz",
    type: "Döviz",
    place: "İsmet İnönü Caddesi",
    googleMapsUrl: "https://maps.app.goo.gl/VDMW7AudxPqiRbq27",
  },
  {
    id: 8,
    name: "Süvari Mağusa",
    type: "Giyim",
    place: "İsmet İnönü Caddesi",
    googleMapsUrl: "https://maps.app.goo.gl/odRhHY4pRTpGLWX67",
  },
  {
    id: 9,
    name: "Shoe For Me",
    type: "Giyim",
    place: "İsmet İnönü Caddesi",
    googleMapsUrl: "https://maps.app.goo.gl/x9ME7BxCHeQEvBqo7",
  },
  {
    id: 10,
    name: "LC Waikiki",
    type: "Giyim",
    place: "İsmet İnönü Caddesi",
    googleMapsUrl: "https://maps.app.goo.gl/puBYXzNm9AfKLXpCA",
  },
  {
    id: 11,
    name: "Old City Saat",
    type: "Saat & Kuyumculuk",
    place: "İsmet İnönü Caddesi",
    googleMapsUrl: "https://maps.app.goo.gl/sFy8698EfkRcYoY59",
  },
  {
    id: 12,
    name: "A&A Premium Erkek",
    type: "Giyim",
    place: "İsmet İnönü Caddesi",
    googleMapsUrl: "https://maps.app.goo.gl/SnrNmeNr2jnA82sH6",
  },
  {
    id: 13,
    name: "Spor Market",
    type: "Spor Ekipmanları",
    place: "İsmet İnönü Caddesi",
    googleMapsUrl: "https://maps.app.goo.gl/vtJj4sLVbTWkuCiW8",
  },
  {
    id: 14,
    name: "Kemaler Ayakkabı",
    type: "Giyim",
    place: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/VCcF9zYv5tZD5rMS7",
  },
  {
    id: 15,
    name: "HABLS Giyim & Spor Ayakkabı",
    type: "Giyim",
    place: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/6Q5gDtDFZuQhJd5e7",
  },
  {
    id: 16,
    name: "Şaşa Aksesuar",
    type: "Giyim",
    place: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/jHvxz5wUUDGc57M38",
  },
  {
    id: 17,
    name: "Flormar Kozmetik Mağazası",
    type: "Kozmetik",
    place: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/jHvxz5wUUDGc57M38",
  },
  {
    id: 18,
    name: "Oopss",
    type: "Genel",
    place: "Macro Mall",
    googleMapsUrl: "https://maps.app.goo.gl/CWJk3aA5aSEZRA4F8",
  },
  {
    id: 19,
    name: "Tekzen",
    type: "Ev & Bahçe",
    place: "Macro Mall",
    googleMapsUrl: "https://maps.app.goo.gl/A63FgecwX4HpP1kGA",
  },
  {
    id: 20,
    name: "IQOS Mağazası",
    type: "Tütün",
    place: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/huU4kQyW4AmAQNZd9",
  },
  {
    id: 21,
    name: "DeFacto",
    type: "Giyim",
    place: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/a5rdSWEQsDPjt9q57",
  },
  {
    id: 22,
    name: "Çavus Telefon",
    type: "Teknoloji",
    place: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/exhpeKqUboDN9QPL6",
  },
];

export default function StoresPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Ana Sayfaya Geri Dön
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-gray-900">
        Mağazaları Keşfet
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
              {store.type === "Teknoloji" && (
                <Laptop className="w-6 h-6 mr-3 text-blue-500" />
              )}
              {store.type === "Giyim" && (
                <Shirt className="w-6 h-6 mr-3 text-pink-500" />
              )}
              {store.type !== "Teknoloji" && store.type !== "Giyim" && (
                <Tag className="w-6 h-6 mr-3 text-yellow-500" />
              )}
              {store.name}
            </h2>
            <p className="text-gray-600 mb-4">
              İçerik:{" "}
              <span className="font-medium text-gray-800">{store.type}</span>
            </p>
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
              <MapPin className="w-5 h-5 mr-3 text-green-600" />
              <a
                href={store.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                {store.place}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
