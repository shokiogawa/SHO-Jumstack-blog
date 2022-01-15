import { GetStaticProps, NextPage } from "next";
import { fetchFrontendsDataAll, fetchFrontendsSEO } from "../../api/frontend/all";
import { FRONTENDS } from "../../types/frontend";
import HomeCard from "../../components/homeCard";
import Seo from "../../components/seo";
import { SEO } from "../../types/seo"


type Props = {
  staticFrontendData: FRONTENDS
  seoData: SEO
}
const Frontend: NextPage<Props> = ({ staticFrontendData, seoData }) => {
  return (
    <>
      <Seo {...seoData} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {staticFrontendData && staticFrontendData.contents.map((data) => (
              <HomeCard key={data.id} {...data} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Frontend

export const getStaticProps: GetStaticProps = async () => {
  const json = await fetchFrontendsDataAll()
  const jsonSEO = await fetchFrontendsSEO()
  const seoData: SEO = {
    pageTitle: jsonSEO.title,
    pageDescription: jsonSEO.description,
    pageUrl: jsonSEO.url,
    pageImage: jsonSEO.image.url
  }
  return {
    props: {
      staticFrontendData: json,
      seoData: seoData
    },
    revalidate: 10
  }
}