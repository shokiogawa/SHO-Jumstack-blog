import type { GetStaticProps, NextPage } from 'next'
import { fetchHomeDataAll } from '../api/home/home'
import { SEO } from "../types/seo";
import { Home } from '../types/home'
import Seo from "../components/seo";

type Props = {
  staticHomeData: Home
  seoData: SEO
}
const Home: NextPage<Props> = ({ staticHomeData, seoData }) => {
  if (!staticHomeData) return <p>Loading</p>
  return (
    <>
      <Seo {...seoData} />
      <main>
        <section className="text-gray-600 body-font bg-gray-100 m-5">
          <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col items-center ">
            <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded " alt="hero" src={`${staticHomeData.thumnail.url}`} />
            <div className="flex flex-col xl:w-1/2" >
              <div dangerouslySetInnerHTML={{ __html: staticHomeData.content }}></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const json = await fetchHomeDataAll()
  const seoData: SEO = {
    pageTitle: json.name,
    pageDescription: json.description,
    pageUrl: `/`,
    pageImage: json.thumnail.url,
  }
  return {
    props: {
      staticHomeData: json,
      seoData: seoData
    },
    revalidate: 10
  }
}
