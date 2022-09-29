import { createModule, gql } from 'graphql-modules'
import { posts } from '../data'

export const postModule = createModule({
  id: 'post',
  typeDefs: gql`
    type Post {
      id: Int!
      poster: User!
      content: String!
    }
    type Query {
      posts: [Post!]!
    }
  `,
  resolvers: {
    Query: {
      posts: () => posts,
    },
  },
})
