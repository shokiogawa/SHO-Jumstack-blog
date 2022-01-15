import { NextPage, GetStaticProps } from "next";
import { fetchBackendSEO } from "../../api/backend/all";
import Seo from "../../components/seo";
import { SEO } from "../../types/seo";

type Props = {
  seoData: SEO
}

const Backend: NextPage<Props> = ({ seoData }) => {
  return (
    <>
      <Seo {...seoData} />
      <h1>バックエンドの実装をここに書くよ</h1>
    </>
  )
}

export default Backend

export const getStaticProps: GetStaticProps = async () => {
  const jsonSEO = await fetchBackendSEO()
  const seoData: SEO = {
    pageTitle: jsonSEO.title,
    pageDescription: jsonSEO.description,
    pageUrl: jsonSEO.url,
    pageImage: jsonSEO.image.url
  }
  return {
    props: {
      // staticFrontendData: json,
      seoData: seoData
    },
    revalidate: 10
  }
}