import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { FRONTEND } from "../../types/frontend";
import { SEO } from "../../types/seo";
import Seo from "../../components/seo";
import Image from "next/image"
import { fetchFrontendData, fetchFrontendsPath } from "../../api/frontend/detail";
type Props = {
  frontendDetail: FRONTEND,
  seoData: SEO
}

const FrontendDetail: NextPage<Props> = ({ frontendDetail, seoData }) => {
  if (!frontendDetail) return <div>Loading</div>
  if (!seoData) return <div>Loading</div>
  return (
    <>
      <Seo {...seoData} />
      <main>
        <div className=" bg-gray-100 m-2 xl:m-10 justify-center flex flex-col items-center">
          <h1 className="text-2xl font-mono font-bold tracking-wider text-center mb-10 mt-10">{frontendDetail.title}</h1>
          <Image className='text-center' src={frontendDetail.thumnail.url} height={380} width={800} />
          <div className={'lg:w-2/3 xl:w-1/2 mt-10 mb-10 p-5'}>
            <div className="" dangerouslySetInnerHTML={{ __html: frontendDetail.content }}></div>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await fetchFrontendsPath()
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params!.id as string
  const json = await fetchFrontendData(id)
  const seoData: SEO = {
    pageTitle: json.title,
    pageDescription: json.description,
    pageUrl: `/frontend/${json.id}`,
    pageImage: json.thumnail.url
  }
  return {
    props: {
      frontendDetail: json,
      seoData: seoData
    },
    revalidate: 10
  }
}

export default FrontendDetail