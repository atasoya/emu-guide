import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
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

    const allowRules = ["/"];

    // Add English category routes
    categories.en.forEach(category => {
        allowRules.push(`/${category.toLowerCase().replace(/ /g, '-')}`);
    });

    // Add Turkish category routes
    categories.tr.forEach(category => {
        allowRules.push(`/${category.toLowerCase().replace(/ /g, '-')}`);
    });

    return {
        rules: {
            userAgent: "*",
            allow: allowRules,
            disallow: [],
        },
        sitemap: `${baseUrl}/sitemap.xml`
    };
}