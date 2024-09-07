import Link from 'next/link'
import { ArrowLeft, ExternalLink, ShoppingBag, PlusCircle } from 'lucide-react'

interface SaleItem {
  id: number
  name: string
  price: number
  contactLink: string
}

const saleItems: SaleItem[] = [
  {
    id: 1,
    name: "Textbook: Introduction to Psychology",
    price: 80,
    contactLink: "https://emu.edu.tr/for-sale/textbook1"
  },
  {
    id: 2,
    name: "Desk Lamp",
    price: 50,
    contactLink: "https://emu.edu.tr/for-sale/lamp1"
  },
  {
    id: 3,
    name: "Bicycle",
    price: 300,
    contactLink: "https://emu.edu.tr/for-sale/bicycle1"
  }
]

export default function ForSalePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Items For Sale</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {saleItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2" />
              {item.name}
            </h2>
            <p className="text-gray-600 mb-4">Price: {item.price} TL</p>
            <a 
              href={item.contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              Contact Seller
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a 
          href="https://emu.edu.tr/submit-sale-item"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Submit Sale Item Listing
        </a>
      </div>
    </div>
  )
}