import Link from 'next/link'
import { ArrowLeft, MapPin, Banknote, MessageSquare, ExternalLink } from 'lucide-react'

interface PPFood {
  id: number
  name: string
  place: string
  googleMapsUrl: string
  price: number
  comments: string[]
}

const ppFoods: PPFood[] = [
  {
    id: 1,
    name: "Chicken Döner",
    place: "Merkez Büfe",
    googleMapsUrl: "https://goo.gl/maps/example1",
    price: 40,
    comments: ["Great value for money", "Always fresh", "Quick service"]
  },
  {
    id: 2,
    name: "Vegetarian Wrap",
    place: "Green Corner",
    googleMapsUrl: "https://goo.gl/maps/example2",
    price: 35,
    comments: ["Healthy option", "Generous portions", "Tasty sauce"]
  },
  {
    id: 3,
    name: "Lahmacun",
    place: "Öz Hatay",
    googleMapsUrl: "https://goo.gl/maps/example3",
    price: 25,
    comments: ["Authentic taste", "Crispy crust", "Best deal on campus"]
  },
  {
    id: 4,
    name: "Tost with Ayran",
    place: "Kantin",
    googleMapsUrl: "https://goo.gl/maps/example4",
    price: 30,
    comments: ["Classic combo", "Perfect for quick lunch", "Consistent quality"]
  },
  {
    id: 5,
    name: "Falafel Plate",
    place: "Lezzet Köşesi",
    googleMapsUrl: "https://goo.gl/maps/example5",
    price: 45,
    comments: ["Filling meal", "Great for vegetarians", "Comes with salad and hummus"]
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Price Performance Foods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ppFoods.map((food) => (
          <div key={food.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{food.name}</h2>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <a 
                  href={food.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  {food.place}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </p>
              <p className="flex items-center text-green-600 font-semibold">
                <Banknote className="w-4 h-4 mr-2" />
                {food.price.toFixed(2)} TL
              </p>
              <div className="mt-4">
                <h3 className="font-semibold flex items-center mb-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Comments
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {food.comments.map((comment, index) => (
                    <li key={index} className="text-sm text-gray-600">{comment}</li>
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