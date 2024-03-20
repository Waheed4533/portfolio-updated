import { type SchemaTypeDefinition } from 'sanity'

import pageinfo from './schemas/pageinfo'
import experience from './schemas/experience'
import project from './schemas/project'
import skill from './schemas/skill'
import social from './schemas/social'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageinfo,experience,project,skill,social],
}