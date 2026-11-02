import { ParticipantChoice } from '@shakerquiz/utilities'
import { guardBody } from '../utilities/guard-body.js'

export const ParticipantProp = Object.freeze({
  choice: 'choice',
  first_name: 'first_name',
  last_name: 'last_name',
  mongo_id: 'mongo_id',
  username: 'username',
})

export const ParticipantProps = Object.freeze(Object.values(ParticipantProp))

export const ParticipantPropValidation = Object.freeze({
  [ParticipantProp.choice]: value => Object.hasOwn(ParticipantChoice, value),
  [ParticipantProp.first_name]: value => typeof value === 'string',
  [ParticipantProp.last_name]: value => typeof value === 'string',
  [ParticipantProp.mongo_id]: value => typeof value === 'string' && value !== '',
  [ParticipantProp.username]: value => typeof value === 'string',
})

export const ParticipantPropException = Object.freeze({
  [ParticipantProp.choice]: `Body.choice must be a ParticipantChoice.`,
  [ParticipantProp.first_name]: `Body.first_name must be a string.`,
  [ParticipantProp.last_name]: `Body.last_name must be a string.`,
  [ParticipantProp.mongo_id]: `Body.mongo_id must be a non-empty string.`,
  [ParticipantProp.username]: `Body.username must be a string.`,
})

export const guardParticipantBody = guardBody('Object', ParticipantPropValidation, ParticipantPropException)
