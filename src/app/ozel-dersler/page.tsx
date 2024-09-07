import Link from 'next/link'
import { ArrowLeft, ExternalLink, Book, PlusCircle } from 'lucide-react'

interface PrivateClass {
  id: number
  name: string
  price: number
  contactLink: string
}

const privateClasses: PrivateClass[] = [
  {
    id: 1,
    name: "MATH 151",
    price: 150,
    contactLink: "https://emu.edu.tr/private-classes/math151"
  },
  {
    id: 2,
    name: "PHYS 101",
    price: 180,
    contactLink: "https://emu.edu.tr/private-classes/phys101"
  },
  {
    id: 3,
    name: "ENGL 201",
    price: 120,
    contactLink: "https://emu.edu.tr/private-classes/engl201"
  }
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Anasayfaya Geri Dön
      </Link>
      <h1 className="text-3xl font-bold mb-6">Özel Dersler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {privateClasses.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Book className="w-5 h-5 mr-2" />
              {classItem.name}
            </h2>
            <p className="text-gray-600 mb-4">Price: {classItem.price} TL</p>
            <a 
              href={classItem.contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              Ulaş
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a 
          href="https://emu.edu.tr/submit-private-class"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Özel Ders Vermek İstiyorum
        </a>
      </div>
    </div>
  )
}