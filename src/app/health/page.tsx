import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  ExternalLink,
  Building2,
  Stethoscope,
  Pill,
  AlertTriangle,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health",
};

interface HealthFacility {
  id: number;
  name: string;
  type: "Hospital" | "Clinic" | "Pharmacy";
  location: string;
  googleMapsUrl: string;
}

const healthFacilities: HealthFacility[] = [
  {
    id: 1,
    name: "EMU Health Center",
    type: "Hospital",
    location: "EMU Campus",
    googleMapsUrl: "https://maps.app.goo.gl/ywL1Sa8FqCijTizA7",
  },
  {
    id: 2,
    name: "Famagusta State Hospital",
    type: "Hospital",
    location: "Salamis Road",
    googleMapsUrl: "https://maps.app.goo.gl/Qxt2Nw3XXtaPLCeB7",
  },
  {
    id: 3,
    name: "Famagusta Life Hospital",
    type: "Hospital",
    location: "City Mall Area",
    googleMapsUrl: "https://maps.app.goo.gl/Aj3Wp734JDZ5HgUp8",
  },
  {
    id: 4,
    name: "Famagusta Central Hospital",
    type: "Hospital",
    location: "Eşref Bitlis Cd",
    googleMapsUrl: "https://maps.app.goo.gl/bUmqfzp99hQsJErb7",
  },
  {
    id: 5,
    name: "Kunter Trust Hospital",
    type: "Hospital",
    location: "Anıt Roundabout Area",
    googleMapsUrl: "https://maps.app.goo.gl/WBELJHP3Py7Tm8p37",
  },
  {
    id: 5,
    name: "MediPark Clinic",
    type: "Clinic",
    location: "Abant Sk",
    googleMapsUrl: "https://maps.app.goo.gl/x9iHAdrpXCzGYo249",
  },
  {
    id: 6,
    name: "Dentica",
    type: "Clinic",
    location: "Bayraktar Road",
    googleMapsUrl: "https://maps.app.goo.gl/PKyLAsZrD3HymNz99",
  },
  {
    id: 7,
    name: "Başarır Dental Clinic",
    type: "Clinic",
    location: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/kzugT5qHwjWGcier8",
  },
  {
    id: 8,
    name: "Sümer Pharmacy",
    type: "Pharmacy",
    location: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/Z9AMdrA3vYHJFpig7",
  },
  {
    id: 9,
    name: "Nasim Pharmacy",
    type: "Pharmacy",
    location: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/dwHiEcMiVEtgcAF49",
  },
  {
    id: 10,
    name: "Hande Besmel Pharmacy",
    type: "Pharmacy",
    location: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/qJfUwkQSaDs9dgct9",
  },
];

export default function HealthPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-gray-900">
        Health Facilities
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {healthFacilities.map((facility) => (
          <div
            key={facility.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-900">
              {facility.type === "Hospital" && (
                <Building2 className="w-6 h-6 mr-2 text-red-500" />
              )}
              {facility.type === "Clinic" && (
                <Stethoscope className="w-6 h-6 mr-2 text-blue-500" />
              )}
              {facility.type === "Pharmacy" && (
                <Pill className="w-6 h-6 mr-2 text-green-500" />
              )}
              {facility.name}
            </h2>
            <div className="space-y-3">
              <p className="text-gray-600">Type: {facility.type}</p>
              <p className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
                <a
                  href={facility.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  {facility.location}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg shadow-md">
        <p className="flex items-center font-bold text-lg">
          <AlertTriangle className="w-6 h-6 mr-2" />
          Important Notice
        </p>
        <p className="mt-2 text-gray-700">
          For after-hours pharmacy services, please check the
          <Link
            href="https://www.kteb.org/dp/?lang=en"
            className="text-blue-600 hover:underline ml-1"
          >
            After Hours Pharmacy list
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
