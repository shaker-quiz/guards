import { Phase } from '@shakerquiz/utilities'
import { guardBody } from '../../../utilities/guard-body.js'

export const MailingProp = Object.freeze({
  phase: 'phase',
  reason: 'reason',
})

export const MailingProps = Object.freeze(Object.values(MailingProp))

export const MailingPropValidation = Object.freeze({
  [MailingProp.phase]: value => Object.hasOwn(Phase, value),
  [MailingProp.reason]: value => typeof value === 'string',
})

export const MailingPropException = Object.freeze({
  [MailingProp.phase]: `Body.phase must be a Phase.`,
  [MailingProp.reason]: `Body.reason must be a string.`,
})

let expected = [
  MailingProp.phase,
  MailingProp.reason,
]

let required = [
  MailingProp.phase,
]

let validation = MailingPropValidation

let exception = MailingPropException

export const guardMailingPATCHServiceBody = guardBody('Object', expected, required, validation, exception)
