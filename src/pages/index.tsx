import type { GetStaticProps, NextPage } from 'next'
import { fetchHomeDataAll } from '../api/home/home_page_fetch'
import { STORIES } from '../types/story'
import HomeCard from '../components/homeCard'

const Home: NextPage<STORIES> = ({ staticHomeData }) => {
  if (!staticHomeData) return <p>Loading</p>
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {staticHomeData && staticHomeData.contents.map((data) => (
            <HomeCard key={data.id} {...data} />
          ))}
        </div>
      </div>
    </section>
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
