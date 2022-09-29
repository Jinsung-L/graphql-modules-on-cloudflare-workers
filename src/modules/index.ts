import { createApplication } from 'graphql-modules'
import { helloModule } from './hello'
import { postModule } from './post'
import { userModule } from './user'

export const application = createApplication({
  modules: [helloModule, userModule, postModule],
})
