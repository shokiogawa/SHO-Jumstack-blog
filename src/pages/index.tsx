import type { GetStaticProps, NextPage } from 'next'
import { fetchHomeDataAll } from '../api/home_page_fetch'
import { client } from '../libs/client'
import styles from '../styles/Home.module.css'
import { STORIES } from '../types/story'

const Home: NextPage<STORIES> = ({ staticHomeData }) => {
  if (!staticHomeData) return <p>Loading</p>
  return (
    <div>
      <ul>
        {staticHomeData && staticHomeData.contents.map((dataDetail) => (
          <li key={dataDetail.id}>{dataDetail.title}</li>
        )
        )}
      </ul>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const json = await fetchHomeDataAll()
  return {
    props: {
      staticHomeData: json
    },
    revalidate: 10
  }
}
