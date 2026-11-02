import { Pattern } from '@shakerquiz/utilities'
import { guardBody } from '../../utilities/guard-body.js'

export const ParticipantsQueryProp = Object.freeze({
  id: 'id',
  mongo_id: 'mongo_id',
  username: 'username',
})

export const ParticipantsQueryProps = Object.freeze(Object.values(ParticipantsQueryProp))

export const ParticipantsQueryPropValidation = Object.freeze({
  [ParticipantsQueryProp.id]: value =>
    Array.isArray(value)
      ? value.every(item => typeof item === 'string' && Pattern.UUID.test(item))
      : value === 'Any',
  [ParticipantsQueryProp.mongo_id]: value =>
    Array.isArray(value)
      ? value.every(item => typeof item === 'string')
      : value === 'Any',
  [ParticipantsQueryProp.username]: value =>
    Array.isArray(value)
      ? value.every(item => typeof item === 'string')
      : value === 'Any',
})

export const ParticipantsQueryPropException = Object.freeze({
  [ParticipantsQueryProp.id]: `Body.id must be 'Any' or an array of uuid.`,
  [ParticipantsQueryProp.mongo_id]: `Body.mongo_id must be 'Any' or an array of strings.`,
  [ParticipantsQueryProp.username]: `Body.username must be 'Any' or an array of strings.`,
})

export const guardParticipantsQueryBody = guardBody(
  'Object',
  ParticipantsQueryPropValidation,
  ParticipantsQueryPropException,
)
