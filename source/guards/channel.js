import { guardBody } from '../utilities/guard-body.js'

export const ChannelProp = Object.freeze({
  id: 'id',
})

export const ChannelProps = Object.freeze(Object.values(ChannelProp))

export const ChannelPropValidation = Object.freeze({
  [ChannelProp.id]: value => typeof value === 'string' && value !== '',
})

export const ChannelPropException = Object.freeze({
  [ChannelProp.id]: `Body.id must be a non-empty string.`,
})

export const guardChannelBody = guardBody('Object', ChannelPropValidation, ChannelPropException)
