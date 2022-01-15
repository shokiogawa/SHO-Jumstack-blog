import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { fetchStoriesPath, fetchStoryData } from "../../api/story/detail";
import { STORY, STORYDETAIL } from "../../types/story";
import Image from "next/image";
import { SEO } from "../../types/seo";
import Seo from "../../components/seo";
type Props = {
  storyDetail: STORY,
  seoData: SEO
}

const StoryDetail: NextPage<Props> = ({ storyDetail, seoData }) => {
  if (!storyDetail || !storyDetail) return <p>Loading</p>
  if (!seoData) return <p>Loading</p>
  return (
    <>
      <Seo {...seoData} />
      <main>
        <div className=" bg-gray-100 m-10 justify-center flex flex-col items-center">
          <h1 className="text-2xl font-mono font-bold tracking-wider text-center mb-10 mt-10">{storyDetail.title}</h1>
          <Image className='text-center' src={storyDetail.thumnail.url} height={380} width={800} />
          <div className={'lg:w-2/3 xl:w-1/2 mt-10 mb-10 p-5'}>
            <div className="" dangerouslySetInnerHTML={{ __html: storyDetail.content }}></div>
          </div>
        </div>
      </main>
    </>
  )
}

export default StoryDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await fetchStoriesPath()
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params!.id as string
  const json = await fetchStoryData(id)
  const seoData: SEO = {
    pageTitle: json.title,
    pageDescription: json.description,
    pageUrl: `/story/${json.id}`,
    pageImage: json.thumnail.url
  }
  return {
    props: {
      storyDetail: json,
      seoData: seoData
    },
    revalidate: 10
  }
}