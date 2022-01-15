import { MEDADATASEO } from "../../types/seo"
import { client } from '../../libs/client'
export const fetchBackendSEO = async (): Promise<MEDADATASEO> => {
  const data = await client.get({
    endpoint: 'seo',
    contentId: 'odpnxzzf2'
  })
  return data
}