import { createClient } from "contentful"

const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID!,
    accessToken: process.env.CONTENT_DELIVERY_API!,
})

export default async function sitemap() {
    const queryOptions = {
        content_type: 'blog',
        select: 'fields.slug',  
    };
    
    // Fetch the articles from Contentful
    const articles = await client.getEntries(queryOptions);
    const slugs = articles.items.map((article: any) => ({
      url: `https://www.vjxsoft.com/blogi/${article.fields.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

    const staticRoutes = [
        {
          url: 'https://www.vjxsoft.com',
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 1,
        },
        {
          url: 'https://www.vjxsoft.com/palvelut',
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.9,
        },
        {
          url: 'https://www.vjxsoft.com/otayhteytta',
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
    ]

    const sitemapRoutes = [...staticRoutes, ...slugs];
    return sitemapRoutes;
}