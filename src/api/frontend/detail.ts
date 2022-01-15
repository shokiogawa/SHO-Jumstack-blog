import { client } from '../../libs/client'
import { FRONTEND } from '../../types/frontend';
import { STORY } from "../../types/story";

export const fetchFrontendsPath = async () => {
  const data = await client.get({
    endpoint: 'frontend'
  })
  return data.contents.map((data: FRONTEND) => {
    return {
      params: {
        id: data.id
      }
    }
  })
}

export const fetchFrontendData = async (contentId: string): Promise<FRONTEND> => {
  const data = await client.get({
    endpoint: 'frontend',
    contentId: contentId,
    queries: { fields: 'id,title,publishedAt,thumnail,content,description' }
  })
  return data
}