import { ParticipantChoice } from '@shakerquiz/utilities'
import { guardBody } from 'source/utilities/guard-body.js'

export const ParticipantPropValidation = Object.freeze({
  mongo_id: value => typeof value === 'string' && value !== '',
  first_name: value => typeof value === 'string',
  last_name: value => typeof value === 'string',
  username: value => typeof value === 'string',
  choice: value => Object.hasOwn(ParticipantChoice, value),
})

export const ParticipantPropException = Object.freeze({
  mongo_id: `Body.mongo_id must be a non-empty string.`,
  first_name: `Body.first_name must be a string.`,
  last_name: `Body.last_name must be a string.`,
  username: `Body.username must be a string.`,
  choice: `Body.choice must be a ParticipantChoice.`,
})

export const guardParticipantBody = guardBody('Object', ParticipantPropValidation, ParticipantPropException)
