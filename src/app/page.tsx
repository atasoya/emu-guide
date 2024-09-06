import Link from 'next/link'
import { Menu, Search } from 'lucide-react'

export default function Component() {
  const categories = [
    "News", "Cafes", "Restaurants", "P/P Foods", "Dormitories",
    "Homes", "Events", "Clubs", "Entertainment", "Departments",
    "Scholarships", "Transportation", "Private Classes", "For Sale", "Ask Questions",
    "I am New", "Placement Scores", "Stationery",
    "Discounts", "Market", "Jobs", "Stores"
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-screen-lg flex h-14 items-center">
          <Link className="mr-6 ml-3 md:ml-0 flex items-center space-x-2" href="/">
            <span className="font-bold text-xl">emu.tips</span>
          </Link>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="flex items-center">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto max-w-screen-lg px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to emu.tips
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your comprehensive guide to Emu University
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-screen-lg px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  className="flex items-center justify-center p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  href={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto max-w-screen-lg flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 emu.tips. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Official Website
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Partner With Us
          </Link>
        </nav>
      </footer>
    </div>  
  )
}
