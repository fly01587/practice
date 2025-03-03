import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://my-nextjs-kohl.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
          },
          {
            url: 'https://my-nextjs-kohl.vercel.app/login',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
          },
          
    ]
}