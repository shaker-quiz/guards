import { ParticipantChoice, Pattern } from '@shakerquiz/utilities'

export const ParticipantProp = Object.freeze({
  id: 'id',
  choice: 'choice',
  first_name: 'first_name',
  last_name: 'last_name',
  mongo_id: 'mongo_id',
  username: 'username',
})

export const ParticipantPropValidation = Object.freeze({
  [ParticipantProp.id]: value => typeof value === 'string' && Pattern.UUID.test(value),
  [ParticipantProp.choice]: value => Object.hasOwn(ParticipantChoice, value),
  [ParticipantProp.first_name]: value => typeof value === 'string',
  [ParticipantProp.last_name]: value => typeof value === 'string',
  [ParticipantProp.mongo_id]: value => typeof value === 'string' && value !== '',
  [ParticipantProp.username]: value => typeof value === 'string',
})

export const ParticipantPropException = Object.freeze({
  [ParticipantProp.id]: `Body.id must be a string of the UUID format.`,
  [ParticipantProp.choice]: `Body.choice must be a ParticipantChoice.`,
  [ParticipantProp.first_name]: `Body.first_name must be a string.`,
  [ParticipantProp.last_name]: `Body.last_name must be a string.`,
  [ParticipantProp.mongo_id]: `Body.mongo_id must be a non-empty string.`,
  [ParticipantProp.username]: `Body.username must be a string.`,
})
