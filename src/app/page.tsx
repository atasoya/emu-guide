"use client";
import { useState } from 'react'
import Link from 'next/link'
import { Menu, Globe } from 'lucide-react'

export default function Component() {
  const [language, setLanguage] = useState<'en' | 'tr'>('en')

  const categories = {
    en: [
      "News", "Cafes", "Restaurants", "PP Foods", "Dormitories",
      "Homes", "Events", "Clubs", "Entertainment", "Departments",
      "Scholarships", "Transportation", "Private Classes", "For Sale", "Communities",
      "I am New", "Placement Scores", "Stationery",
      "Discounts", "Markets", "Jobs", "Stores", "Guides"
    ],
    tr: [
      "Haberler", "Kafeler", "Restoranlar", "FP Yemekler", "Yurtlar",
      "Evler", "Etkinlikler", "Kulüpler", "Eğlence", "Bölümler",
      "Burslar", "Ulaşım", "Özel Dersler", "Satılık", "Topluluklar",
      "Yeni Geldim", "Yerleştirme Puanları", "Kırtasiye",
      "İndirimler", "Marketler", "İş İlanları", "Mağazalar", "Rehberler"
    ]
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-screen-lg flex h-14 items-center justify-between">
          <Link className="mr-6 ml-3 md:ml-0 flex items-center space-x-2" href="/">
            <span className="font-bold text-xl">emu.tips</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground"
              aria-label={language === 'en' ? 'Switch to Turkish' : 'İngilizce\'ye geç'}
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2">{language === 'en' ? 'TR' : 'EN'}</span>
            </button>
            <button className="md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md p-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto max-w-screen-lg px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {language === 'en' ? 'Welcome to emu.tips' : 'emu.tips\'e Hoş Geldiniz'}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {language === 'en' ? 'Your comprehensive guide to EMU' : 'DAÜ için kapsamlı rehberiniz'}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-screen-lg px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'en' ? 'Categories' : 'Kategoriler'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {categories[language].map((category, index) => (
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
            {language === 'en' ? 'Official Website' : 'Resmi Web Sitesi'}
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {language === 'en' ? 'Partner With Us' : 'Bizimle Çalışın'}
          </Link>
        </nav>
      </footer>
    </div>
  )
}