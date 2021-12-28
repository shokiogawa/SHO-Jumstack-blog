import { NextPage } from "next";
const Header: NextPage = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">SHOBlog</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-10  hover:underline">フロントエンド</a>
          <a className="mr-10 hover:underline">バックエンド</a>
          <a className="mr-10 hover:underline">インフラ</a>
        </nav>
      </div>
    </header>
  )
}

export default Header