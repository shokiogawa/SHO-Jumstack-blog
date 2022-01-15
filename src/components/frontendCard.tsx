import { NextPage } from "next";
import { STORY } from "../types/story";
import Image from 'next/image'
import Link from "next/link";
import Story from "../pages/story";
import Frontend from "../pages/frontend";

const FrontendCard: NextPage<STORY> = ({ title, thumnail, publishedAt, id, description }) => {
  const point = description.length < 60 ? '' : '....'
  const descriptionEdit = description.substr(0, 60) + point
  return (
    <>
      <Link href={`frontend/${id}`}>
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={thumnail.url} alt="blog" />
            {/* <Image src={thumnail.url} width={thumnail.width} height={thumnail.height} objectFit={'cover'} /> */}
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">STORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
              <p className="leading-relaxed mb-3">{descriptionEdit}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default FrontendCard