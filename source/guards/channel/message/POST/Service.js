import { MessageKind } from '@shakerquiz/utilities'
import { isStringTag } from '@yurkimus/string-tag'
import { guardBody } from '../../../../utilities/guard-body.js'

export const MessageProp = Object.freeze({
  content: 'content',
  kind: 'kind',
})

export const MessageProps = Object.freeze(Object.values(MessageProp))

export const MessagePropValidation = Object.freeze({
  [MessageProp.content]: value =>
    (isStringTag('Object', value) || isStringTag('Array', value)) && Object.keys(value).length > 0,
  [MessageProp.kind]: value => value === MessageKind.Inline,
})

export const MessagePropException = Object.freeze({
  [MessageProp.content]: `Body.content must be a non-empty object or array.`,
  [MessageProp.kind]: `Body.kind must be '${MessageKind.Inline}'.`,
})

let expected = [
  MessageProp.content,
  MessageProp.kind,
]

let required = [
  MessageProp.content,
  MessageProp.kind,
]

let validation = MessagePropValidation

let exception = MessagePropException

export const guardChannelMessagePOSTServiceBody = guardBody('Object', expected, required, validation, exception)
