import { posts } from './blog/posts'

export default function sitemap() {
  const postUrls = posts.map(post => ({
    url: `https://www.khalilbenchekroun.me/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: 'https://www.khalilbenchekroun.me',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.khalilbenchekroun.me/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...postUrls,
  ]
}
