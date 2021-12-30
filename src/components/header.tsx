import { NextPage } from "next";
import Link from "next/link";
const Header: NextPage = () => {
  return (
    <header className="text-gray-600 body-font ">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <a className="flex title-font font-mono items-center text-gray-900 ml-4 md:mb-0 ">
          <Link href={'/'}><span className="ml-3 text-sm md:text-xl">SHO Blog</span></Link>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
          <Link href={'/frontend'}><a className="mr-2 md:mr-10  hover:underline text-sm md:text-xl">フロントエンド</a></Link>
          <Link href={'/backend'}><a className="mr-2 md:mr-10 hover:underline text-sm md:text-xl">バックエンド</a></Link>
          <Link href={'/story'}><a className="mr-2 md:mr-10 hover:underline text-sm md:text-xl">ストーリー</a></Link>
        </nav>
      </div>
    </header>
  )
}

export default Header