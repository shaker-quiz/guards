import { ParticipantProp, ParticipantPropValidation } from '../../../entities/participant.js'
import { filterValidation } from '../../../utilities/filter-validation.js'
import { guardBody } from '../../../utilities/guard-body.js'

let expected = [
  ParticipantProp.id,
  ParticipantProp.mongo_id,
  ParticipantProp.username,
]

let required = []

let validation = {
  [ParticipantProp.id]: filterValidation(ParticipantPropValidation.id),
  [ParticipantProp.mongo_id]: filterValidation(ParticipantPropValidation.mongo_id),
  [ParticipantProp.username]: filterValidation(ParticipantPropValidation.username),
}

let exception = {
  [ParticipantProp.id]: `Body.id must be 'Any' or an array of uuid.`,
  [ParticipantProp.mongo_id]: `Body.mongo_id must be 'Any' or an array of non-empty strings.`,
  [ParticipantProp.username]: `Body.username must be 'Any' or an array of strings.`,
}

export const guardParticipantsQUERYServiceBody = guardBody('Object', expected, required, validation, exception)
