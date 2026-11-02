import { MessageKind } from '@shakerquiz/utilities'
import { isStringTag } from '@yurkimus/string-tag'
import { guardBody } from '../utilities/guard-body.js'

export const MessagePropValidation = Object.freeze({
  // Template is not implemented yet, so we handle only Inline messages.
  kind: value => value === MessageKind.Inline,
  content: value => (isStringTag('Object', value) || isStringTag('Array', value)) && Object.keys(value).length > 0,
})

export const MessagePropException = Object.freeze({
  kind: `Body.kind must be '${MessageKind.Inline}'.`,
  content: `Body.content must be a non-empty object or array.`,
})

export const guardMessageBody = guardBody('Object', MessagePropValidation, MessagePropException)
