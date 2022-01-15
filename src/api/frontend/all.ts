import { client } from '../../libs/client'
import { FRONTENDS } from '../../types/frontend';
import { MEDADATASEO } from '../../types/seo';

export const fetchFrontendsDataAll = async (): Promise<FRONTENDS> => {
  const data = await client.get({
    endpoint: 'frontend',
    queries: { fields: 'id,title,publishedAt,thumnail,description' }

  })
  return data
}

export const fetchFrontendsSEO = async (): Promise<MEDADATASEO> => {
  const data = await client.get({
    endpoint: 'seo',
    contentId: 's0ac89df78'
  })
  return data
}