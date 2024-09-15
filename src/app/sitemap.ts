import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://emu.guide'

    const categories = {
        en: [
          "News", "Cafes", "Restaurants", "PP Foods", "Dormitories","Health","Fitness",
          "Events", "Clubs", "Entertainment", "Faculties",
          "Scholarships", "Transportation", "Private Classes", "For Sale", "Communities",
          "I am New","Stationery",
          "Discounts", "Markets", "Stores", "Guides"
        ],
        tr: [
          "Haberler", "Kafeler", "Restoranlar", "FP Yemekler", "Yurtlar","Sağlık","Fitness",
          "Etkinlikler", "Kulüpler", "Eğlence", "Fakülteler",
          "Burslar", "Ulaşım", "Özel Dersler", "Satılık", "Topluluklar",
          "Yeni Geldim","Kırtasiye",
          "Indirimler", "Marketler", "Mağazalar", "Rehberler"
        ]
      };

    const sitemapEntries: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];

    // Add English category pages
    categories.en.forEach(category => {
        sitemapEntries.push({
            url: `${baseUrl}/${category.toLowerCase().replace(/ /g, '-')}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    });

    // Add Turkish category pages
    categories.tr.forEach(category => {
        sitemapEntries.push({
            url: `${baseUrl}/${category.toLowerCase().replace(/ /g, '-')}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    });

    return sitemapEntries;
}