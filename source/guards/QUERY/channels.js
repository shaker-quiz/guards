import { Channel, Channels } from '@shakerquiz/utilities'
import { guardBody } from '../../utilities/guard-body.js'

export const ChannelsQueryProp = Object.freeze({
  channel: 'channel',
  id: 'id',
})

export const ChannelsQueryProps = Object.freeze(Object.values(ChannelsQueryProp))

export const ChannelsQueryPropValidation = Object.freeze({
  [ChannelsQueryProp.channel]: value => Object.hasOwn(Channel, value),
  [ChannelsQueryProp.id]: value =>
    Array.isArray(value)
      ? value.every(item => typeof item === 'string')
      : value === 'Any',
})

export const ChannelsQueryPropException = Object.freeze({
  [ChannelsQueryProp.channel]: `Body.channel must be one of ${Channels.join(', ')}.`,
  [ChannelsQueryProp.id]: `Body.id must be 'Any' or an array of strings.`,
})

export const guardChannelsQueryBody = guardBody('Object', ChannelsQueryPropValidation, ChannelsQueryPropException)
