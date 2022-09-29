export interface User {
  id: number
  name: string
}

export const users: User[] = [
  {
    id: 1,
    name: 'Alice',
  },
  {
    id: 2,
    name: 'Bob',
  },
]

export interface Post {
  id: number
  poster: User
  content: string
}

export const posts: Post[] = [
  {
    id: 1,
    poster: {
      id: 1,
      name: 'Alice',
    },
    content: 'The first post.',
  },
  {
    id: 2,
    poster: {
      id: 2,
      name: 'Bob',
    },
    content: 'The second post.',
  },
  {
    id: 3,
    poster: {
      id: 1,
      name: 'Alice',
    },
    content: 'The third post.',
  },
]
