import { NextPage } from "next";
import Head from "next/head";
import { SEO } from "../types/seo";

const Seo: NextPage<SEO> = ({ pageTitle, pageDescription, pageUrl, pageImage }) => {
  const point = pageDescription.length < 200 ? '' : '....'
  const description = pageDescription.substr(0, 200) + point
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={pageUrl} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={pageUrl} />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={pageImage} />
      <link rel="canonical" href={pageUrl} />
    </Head>
  )
}

export default Seo