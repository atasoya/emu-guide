import Link from "next/link";
import {
  MapPin,
  Clock,
  Banknote,
  ArrowLeft,
  MessageSquare,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafes",
};

interface Cafe {
  name: string;
  location: string;
  googleMapsUrl: string;
  openTime: string;
  closeTime: string;
  studyScore: number;
  priceRange: "$" | "$$" | "$$$";
  comments: string[];
}

const cafes: Cafe[] = [
  {
    name: "Yemen Coffee EMU",
    location: "EMU Campus Center",
    googleMapsUrl:
      "https://maps.app.goo.gl/VutBQQyHeAmScayw7?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "01:00",
    studyScore: 7,
    priceRange: "$$$",
    comments: ["Good ambience", "Lovely staff", "Location is good"],
  },
  {
    name: "Jojo Cafe",
    location: "Computer Engineering Department",
    googleMapsUrl:
      "https://maps.app.goo.gl/jm81siDu6TrHbU5u8?g_st=com.google.maps.preview.copy",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 9,
    priceRange: "$$",
    comments: ["Great service", "Lovely staff", "Fresh homemade pastries"],
  },
  {
    name: "Rock Café EMU",
    location: "IT Department",
    googleMapsUrl:
      "https://maps.app.goo.gl/CyT7TQ1FCCH8fBkQ8?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "17:00",
    studyScore: 7,
    priceRange: "$",
    comments: ["Great coffee", "Lovely staff", "Friendly atmosphere"],
  },
  {
    name: "DAU-SEN LOCAL",
    location: "EMU Campus Center",
    googleMapsUrl:
      "https://maps.app.goo.gl/pk3EDijT6nLWjMYD7?g_st=com.google.maps.preview.copy",
    openTime: "07:00",
    closeTime: "21:00",
    studyScore: 8,
    priceRange: "$$$",
    comments: [
      "Warm and sustainable place to eat and study",
      "Cozy vibe",
      "Great coffee and delicious foods",
    ],
  },
  {
    name: "Sandra’s Café",
    location: "EMU Campus Center",
    googleMapsUrl:
      "https://maps.app.goo.gl/KwBxqsKiu7wdT4Jt7?g_st=com.google.maps.preview.copy",
    openTime: "09:00",
    closeTime: "22:00",
    studyScore: 7,
    priceRange: "$",
    comments: ["Good location", "Billiards", "Lovely staff"],
  },
  {
    name: "Break Point",
    location: "EMU Campus Center",
    googleMapsUrl:
      "https://maps.app.goo.gl/JbNv8HJxNybm5DVn6?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "20:00",
    studyScore: 5,
    priceRange: "$",
    comments: ["Convenient location", "Good coffee", "Friendly environment"],
  },
  {
    name: "Crush",
    location: "EMU Campus Center",
    googleMapsUrl:
      "https://maps.app.goo.gl/Mjx4nVM21FigFCww7?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "20:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Good ambience", "Cozy place", "Great coffees"],
  },
  {
    name: "Gloria Jean’s Coffeee Pop-Art",
    location: "Popart Dormitory",
    googleMapsUrl:
      "https://maps.google.com?ftid=0x14dfc976fbf615cb:0x44bf9d291d27dbe5&entry=gps",
    openTime: "09:00",
    closeTime: "23:00",
    studyScore: 9,
    priceRange: "$$$",
    comments: [
      "Good atmosphere",
      "Great coffee and desserts",
      "Convenient location",
    ],
  },
  {
    name: "Gloria Jean’s Coffees EMU",
    location: "Salamis Road",
    googleMapsUrl:
      "https://maps.app.goo.gl/Za7QbbGAZFBfwPVMA?g_st=com.google.maps.preview.copy",
    openTime: "07:00",
    closeTime: "00:00",
    studyScore: 9,
    priceRange: "$$$",
    comments: ["Great terrace", "Quality coffee", "Convenient location"],
  },
  {
    name: "To Go Coffee Time",
    location: "Salamis Road",
    googleMapsUrl:
      "https://maps.app.goo.gl/85Zdt427DWiDhQgq5?g_st=com.google.maps.preview.copy",
    openTime: "08:30",
    closeTime: "23:30",
    studyScore: 7,
    priceRange: "$$",
    comments: [
      "Calm environment",
      "Proper and delicious coffee",
      "Good location",
    ],
  },
  {
    name: "Motto Café Bistro",
    location: "Salamis Road",
    googleMapsUrl:
      "https://maps.app.goo.gl/ZLYZ1sVpcg6ekUot8?g_st=com.google.maps.preview.copy",
    openTime: "10:00",
    closeTime: "03:00",
    studyScore: 4,
    priceRange: "$$",
    comments: [
      "Great accessibility and outside seating area",
      "Great shisha",
      "Good service",
    ],
  },
  {
    name: "Mackbear Coffee",
    location: "Novel Centre Point",
    googleMapsUrl:
      "https://maps.app.goo.gl/qSvJwGcjx8761Q5v7?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "01:00",
    studyScore: 8,
    priceRange: "$$$",
    comments: ["Refreshing environment", "Good vibes", "Great coffee"],
  },
  {
    name: "Okka Coffee",
    location: "Salamis Road",
    googleMapsUrl:
      "https://maps.app.goo.gl/LBdgRmLnE38KWA14A?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "01:00",
    studyScore: 3,
    priceRange: "$$",
    comments: [
      "Wide range of coffee, brews and desserts",
      "Fast service",
      "Premium shisha",
    ],
  },
  {
    name: "Exile Coffee and Wine",
    location: "Salamis Road",
    googleMapsUrl:
      "https://maps.app.goo.gl/wZtMJfGzq537vVXy8?g_st=com.google.maps.preview.copy",
    openTime: "08:30",
    closeTime: "23:00",
    studyScore: 5,
    priceRange: "$$$",
    comments: [
      "Great coffee, drinks and fellowship",
      "Cozy atmosphere",
      "Lovely staff",
    ],
  },
  {
    name: "Caffe Pascucci",
    location: "Salamis Road",
    googleMapsUrl:
      "https://maps.app.goo.gl/87wpiW1pC8pMuQbn9?g_st=com.google.maps.preview.copy",
    openTime: "09:00",
    closeTime: "23:00",
    studyScore: 8,
    priceRange: "$$",
    comments: ["Fast Wi-fi", "Chill atmosphere", "Good coffee"],
  },
  {
    name: "Cortado Espresso Bar",
    location: "Salamis Road",
    googleMapsUrl:
      "https://maps.app.goo.gl/BFeVvMhACR4VVbN18?g_st=com.google.maps.preview.copy",
    openTime: "09:00",
    closeTime: "00:00",
    studyScore: 9,
    priceRange: "$$$",
    comments: ["Quick service", "Cozy atmosphere", "Beautiful garden"],
  },
  {
    name: "Narin Eatery",
    location: "Salamis Road",
    googleMapsUrl:
      "https://maps.app.goo.gl/H6qucM67hn5eTEun7?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "00:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Free parking", "Quality food", "Good pastries and coffee"],
  },
  {
    name: "Loof Coffee & Shopping",
    location: "Salamis Road",
    googleMapsUrl:
      "https://maps.app.goo.gl/5dnhN7viDGHpnUKv5?g_st=com.google.maps.preview.copy",
    openTime: "8:00",
    closeTime: "00:00",
    studyScore: 9,
    priceRange: "$$$",
    comments: ["Lovely staff", "Good coffee", "Homemade pastries"],
  },
  {
    name: "Coffee Corner Cakes",
    location: "Salamis Road",
    googleMapsUrl:
      "https://maps.app.goo.gl/N93U41z7nC3MBmVf9?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "00:00",
    studyScore: 7,
    priceRange: "$$$",
    comments: ["Lovely staff", "Good coffee", "Meeting room available"],
  },
  {
    name: "MOC Ingate",
    location: "Ingate Hotel",
    googleMapsUrl:
      "https://maps.app.goo.gl/N93U41z7nC3MBmVf9?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "00:00",
    studyScore: 10,
    priceRange: "$$$",
    comments: ["Lovely staff", "Good coffee", "Friendly staff"],
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
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Cafes near EMU</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cafes.map((cafe, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{cafe.name}</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <a
                  href={cafe.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {cafe.location}
                </a>
              </p>
              <p className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {cafe.openTime} - {cafe.closeTime}
              </p>
              <p className="flex items-center">
                <Banknote className="w-4 h-4 mr-2" />
                {cafe.priceRange}
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">Study Score:</span>
                <span
                  className={`px-2 py-1 rounded ${
                    cafe.studyScore >= 8
                      ? "bg-green-100 text-green-800"
                      : cafe.studyScore >= 5
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {cafe.studyScore}/10
                </span>
              </p>
              <div className="mt-4">
                <h3 className="font-semibold flex items-center mb-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Comments
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {cafe.comments.map((comment, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      {comment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
