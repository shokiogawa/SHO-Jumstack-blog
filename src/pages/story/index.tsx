import { GetStaticProps, NextPage } from "next";
import { STORIES } from "../../types/story";
import HomeCard from '../../components/homeCard'
import { fetchStoriesDataAll, fetchStorySEO } from "../../api/story/all";
import { SEO } from "../../types/seo";
import Seo from "../../components/seo";

type Props = {
  staticStory: STORIES,
  seoData: SEO
}

const Story: NextPage<Props> = ({ staticStory, seoData }) => {
  return (
    <>
      <Seo {...seoData} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {staticStory && staticStory.contents.map((data) => (
              <HomeCard key={data.id} {...data} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Story

export const getStaticProps: GetStaticProps = async () => {
  const json = await fetchStoriesDataAll()
  const jsonSEO = await fetchStorySEO()
  const seoData: SEO = {
    pageTitle: jsonSEO.title,
    pageDescription: jsonSEO.description,
    pageImage: jsonSEO.image.url,
    pageUrl: jsonSEO.url
  }
  return {
    props: {
      staticStory: json,
      seoData: seoData
    },
    revalidate: 10
  }
}