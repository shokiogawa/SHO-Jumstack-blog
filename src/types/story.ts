export type STORY = {
  id: string,
  publishedAt: string,
  title: string,
  thumnail: {
    url: string
    height: number
    width: number
  }
  content: string
}

export type STORIES = {
  staticHomeData: {
    contents: [STORY]
  }
}