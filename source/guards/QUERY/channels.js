import { Channel, Channels } from '@shakerquiz/utilities'
import { guardBody } from 'source/utilities/guard-body.js'

export const ChannelsQueryPropValidation = Object.freeze({
  channel: value => Object.hasOwn(Channel, value),

  id: value =>
    Array.isArray(value)
      ? value.every(item => typeof item === 'string')
      : value === 'Any',
})

export const ChannelsQueryPropException = Object.freeze({
  channel: `Body.channel must be one of ${Channels.join(', ')}.`,
  id: `Body.id must be 'Any' or an array of strings.`,
})

export const guardChannelsQueryBody = guardBody('Object', ChannelsQueryPropValidation, ChannelsQueryPropException)
