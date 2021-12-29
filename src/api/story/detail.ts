import { client } from '../../libs/client'
import { STORIES, STORY } from "../../types/story";

export const fetchStoriesPath = async () => {
  const data = await client.get({
    endpoint: 'stories'
  })
  return data.contents.map((data: STORY) => {
    return {
      params: {
        id: data.id
      }
    }
  })
}

export const fetchStoryData = async (contentId: string): Promise<STORY> => {
  const data = await client.get({
    endpoint: 'stories',
    contentId: contentId
  })
  return data
}