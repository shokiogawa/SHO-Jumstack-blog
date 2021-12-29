//命名: 一覧データの場合(fetchFrontsDataAll)、 詳細の場合(fetchFrontData)、カテゴライズされている場合(fetchFrontsDataCategorized)
import { client } from '../../libs/client'
import { STORIES } from "../../types/story";

export const fetchHomeDataAll = async (): Promise<STORIES> => {
  const data = await client.get({
    endpoint: 'stories'
  })
  return data
}