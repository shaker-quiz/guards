import { Pattern } from '@shakerquiz/utilities'
import { guardBody } from '../../utilities/guard-body.js'

export const ParticipantsQueryPropValidation = Object.freeze({
  id: value =>
    Array.isArray(value)
      ? value.every(item => typeof item === 'string' && Pattern.UUID.test(item))
      : value === 'Any',

  mongo_id: value =>
    Array.isArray(value)
      ? value.every(item => typeof item === 'string')
      : value === 'Any',

  username: value =>
    Array.isArray(value)
      ? value.every(item => typeof item === 'string')
      : value === 'Any',
})

export const ParticipantsQueryPropException = Object.freeze({
  id: `Body.id must be 'Any' or an array of uuid.`,
  mongo_id: `Body.mongo_id must be 'Any' or an array of strings.`,
  username: `Body.username must be 'Any' or an array of strings.`,
})

export const guardParticipantsQueryBody = guardBody(
  'Object',
  ParticipantsQueryPropValidation,
  ParticipantsQueryPropException,
)
