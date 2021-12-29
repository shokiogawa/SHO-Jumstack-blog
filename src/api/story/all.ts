import { client } from '../../libs/client'
import { STORIES } from "../../types/story";

export const fetchStoriesDataAll = async (): Promise<STORIES> => {
  const data = await client.get({
    endpoint: 'stories'
  })
  return data
}