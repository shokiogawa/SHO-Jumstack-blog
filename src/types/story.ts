export type STORY = {
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

export type STORIES = {
  contents: [STORY]
}

export type STORYDETAIL = {
  staticStoryDetail: STORY
}