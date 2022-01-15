export type Home = {
  publishedAt: string,
  name: string,
  thumnail: {
    url: string,
    height: number,
    width: number
  },
  content: string,
  description: string
}