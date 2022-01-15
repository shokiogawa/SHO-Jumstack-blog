export type FRONTEND = {
  id: string,
  publishedAt: string,
  title: string,
  thumnail: {
    url: string
    height: number
    width: number
  }
  content: string,
  description: string
}

export type FRONTENDS = {
  contents: [FRONTEND]
}