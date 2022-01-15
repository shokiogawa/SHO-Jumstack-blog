import { client } from '../../libs/client'
import { STORIES } from "../../types/story";
import { MEDADATASEO } from '../../types/seo';

export const fetchStoriesDataAll = async (): Promise<STORIES> => {
  const data = await client.get({
    endpoint: 'stories'
  })
  return data
}

export const fetchStorySEO = async (): Promise<MEDADATASEO> => {
  const data = await client.get({
    endpoint: 'seo',
    contentId: 'dd5782ljk'
  })
  return data
}