import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    // Replace with your actual domain later when deploying
    sitemap: 'https://segera-di-deploy.vercel.app/sitemap.xml',
  }
}
