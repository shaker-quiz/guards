import { ParticipantProp, ParticipantPropException, ParticipantPropValidation } from '../../../entities/participant.js'
import { guardBody } from '../../../utilities/guard-body.js'

let expected = [
  ParticipantProp.choice,
  ParticipantProp.first_name,
  ParticipantProp.last_name,
  ParticipantProp.mongo_id,
  ParticipantProp.username,
]

let required = [
  ParticipantProp.choice,
  ParticipantProp.first_name,
  ParticipantProp.last_name,
  ParticipantProp.mongo_id,
  ParticipantProp.username,
]

let validation = ParticipantPropValidation

let exception = ParticipantPropException

export const guardParticipantPOSTServiceBody = guardBody('Object', expected, required, validation, exception)
