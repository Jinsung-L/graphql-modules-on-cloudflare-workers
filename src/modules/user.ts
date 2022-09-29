import { createModule, gql } from 'graphql-modules'
import { users } from '../data'

export const userModule = createModule({
  id: 'user',
  typeDefs: gql`
    type Query {
      users: [User!]!
    }
    type User {
      id: Int!
      name: String!
    }
  `,
  resolvers: {
    Query: {
      users: () => users,
    },
  },
})
