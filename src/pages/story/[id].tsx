import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { fetchStoriesPath, fetchStoryData } from "../../api/story/detail";
import { STORYDETAIL } from "../../types/story";
import Image from "next/image";

const StoryDetail: NextPage<STORYDETAIL> = ({ staticStoryDetail }) => {
  if (!staticStoryDetail) return <p>Loading</p>
  return (
    <>
      <div className=" bg-gray-100 m-10 justify-center flex flex-col items-center">
        <h1 className="text-2xl font-mono font-bold tracking-wider text-center mb-10 mt-10">{staticStoryDetail.title}</h1>
        <Image className='text-center' src={staticStoryDetail.thumnail.url} height={380} width={800} />
        <div className={'lg:w-2/3 xl:w-1/2 mt-10 mb-10'}>
          <div className="" dangerouslySetInnerHTML={{ __html: staticStoryDetail.content }}></div>
        </div>
      </div>
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
  return {
    props: {
      staticStoryDetail: json
    },
    revalidate: 10
  }
}