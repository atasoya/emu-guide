import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Banknote,
  ExternalLink,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Etkinlikler",
};

const events = [
  {
    id: 1,
    name: "Oryantasyon Günleri",
    date: "2024-09-2",
    place: "DAÜ Aktivite Merkezi",
    googleMapsUrl: "https://maps.app.goo.gl/w5LpmBR1FN8j3FoL6",
    cost: "Öğrenciler için ücretsiz",
  },
  {
    id: 2,
    name: "Avrupa Hareketlilik Haftası",
    date: "2024-09-21",
    place: "Zambak Tatil Köyü",
    googleMapsUrl: "https://maps.app.goo.gl/UQ2aVFbn119kQPcV7",
    cost: "Ücretsiz",
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
      <h1 className="text-3xl font-bold mb-6">Etkinlikler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {event.name}
            </h2>
            <div className="space-y-3">
              <p className="flex items-center text-gray-700">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-2" />
                <a
                  href={event.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  {event.place}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </p>
              <p className="flex items-center text-green-600 font-semibold">
                <Banknote className="w-5 h-5 mr-2" />
                {event.cost}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
