import { guardBody } from 'source/utilities/guard-body.js'

export const ChannelPropValidation = Object.freeze({
  id: value => typeof value === 'string' && value !== '',
})

export const ChannelPropException = Object.freeze({
  id: `Body.id must be a non-empty string.`,
})

export const guardChannelBody = guardBody('Object', ChannelPropValidation, ChannelPropException)
