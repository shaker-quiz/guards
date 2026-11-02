import { guardBody } from '../utilities/guard-body.js'

export const ChannelMailingMessagePropValidation = Object.freeze({
  sender: value => typeof value === 'string' && value !== '',
  recipient: value => typeof value === 'string' && value !== '',
})

export const ChannelMailingMessagePropException = Object.freeze({
  sender: `Body.sender must be a non-empty string.`,
  recipient: `Body.recipient must be a non-empty string.`,
})

export const guardChannelMailingMessageBody = guardBody(
  'Object',
  ChannelMailingMessagePropValidation,
  ChannelMailingMessagePropException,
)
