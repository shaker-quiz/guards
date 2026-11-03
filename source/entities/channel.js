export const ChannelProp = Object.freeze({
  id: 'id',
})

export const ChannelPropValidation = Object.freeze({
  [ChannelProp.id]: value => typeof value === 'string' && value !== '',
})

export const ChannelPropException = Object.freeze({
  [ChannelProp.id]: `Body.id must be a non-empty string.`,
})
