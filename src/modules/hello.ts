import { createModule, gql } from 'graphql-modules'

export const helloModule = createModule({
  id: 'hello',
  typeDefs: gql`
    type Query {
      hello: String!
    }
  `,
  resolvers: {
    Query: {
      hello() {
        return 'world!'
      },
    },
  },
})
