//命名: 一覧データの場合(fetchFrontsDataAll)、 詳細の場合(fetchFrontData)、カテゴライズされている場合(fetchFrontsDataCategorized)
import { client } from '../../libs/client'
import { Home } from '../../types/home';

export const fetchHomeDataAll = async (): Promise<Home> => {
  const data = await client.get({
    endpoint: 'home',

  })
  return data
}