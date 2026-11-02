import { guardBody } from '../utilities/guard-body.js'

export const ChannelMailingMessageProp = Object.freeze({
  recipient: 'recipient',
  sender: 'sender',
})

export const ChannelMailingMessageProps = Object.freeze(Object.values(ChannelMailingMessageProp))

export const ChannelMailingMessagePropValidation = Object.freeze({
  [ChannelMailingMessageProp.recipient]: value => typeof value === 'string' && value !== '',
  [ChannelMailingMessageProp.sender]: value => typeof value === 'string' && value !== '',
})

export const ChannelMailingMessagePropException = Object.freeze({
  [ChannelMailingMessageProp.recipient]: `Body.recipient must be a non-empty string.`,
  [ChannelMailingMessageProp.sender]: `Body.sender must be a non-empty string.`,
})

export const guardChannelMailingMessageBody = guardBody(
  'Object',
  ChannelMailingMessagePropValidation,
  ChannelMailingMessagePropException,
)
