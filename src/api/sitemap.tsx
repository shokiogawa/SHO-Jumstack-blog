import { client } from '../libs/client';
import { SITEMAP } from '../types/sitemap';
export const fetchSitemapData = async () => {
  const backendContents = await client.get({
    endpoint: 'backend',
    queries: { fields: 'id,publishedAt,' }
  })
  const frontendContents = await client.get({
    endpoint: 'frontend',
    queries: { fields: 'id,publishedAt,' }
  })
  const storyContents = await client.get({
    endpoint: 'stories',
    queries: { fields: 'id,publishedAt,' }
  })
  return {
    contents: [
      ...backendContents.contents,
      ...frontendContents.contents,
      ...storyContents.contents
    ]
  }
}