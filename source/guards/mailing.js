import { Phase } from '@shakerquiz/utilities'
import { guardBody } from '../utilities/guard-body.js'

export const MailingPropValidation = Object.freeze({
  phase: value => Object.hasOwn(Phase, value),
  reason: value => typeof value === 'string',
})

export const MailingPropException = Object.freeze({
  phase: `Body.phase must be a Phase.`,
  reason: `Body.reason must be a string.`,
})

export const guardMailingBody = guardBody('Object', MailingPropValidation, MailingPropException)
