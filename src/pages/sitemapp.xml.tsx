import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { fetchSitemapData } from "../api/sitemap";
const Page = () => null
export const getServerSideProps: GetServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const xml = await generateSitemap()
  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
}

async function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const sitemapPaths = await fetchSitemapData()
  sitemapPaths.contents.map((path) => {
    xml += `
    <url>
      <loc>${'https://sho-jumstack-blog.vercel.app/'}${path.id}</loc>
      <lastmod>${path.publishedAt}</lastmod>
      <changefreq>monthly</changefreq>
    </url>
  `
  })
  xml += `</urlset>`
  return xml
}

export default Page