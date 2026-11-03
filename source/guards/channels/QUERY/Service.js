import { Channel, Channels } from '@shakerquiz/utilities'
import { ChannelProp, ChannelPropValidation } from '../../../entities/channel.js'
import { filterValidation } from '../../../utilities/filter-validation.js'
import { guardBody } from '../../../utilities/guard-body.js'

export const ChannelsQueryProp = Object.freeze({
  channel: 'channel',
  id: ChannelProp.id,
})

let expected = [
  ChannelsQueryProp.channel,
  ChannelsQueryProp.id,
]

let required = [
  ChannelsQueryProp.channel,
]

let validation = {
  [ChannelsQueryProp.channel]: value => Object.hasOwn(Channel, value),
  [ChannelsQueryProp.id]: filterValidation(ChannelPropValidation.id),
}

let exception = {
  [ChannelsQueryProp.channel]: `Body.channel must be one of ${Channels.join(', ')}.`,
  [ChannelsQueryProp.id]: `Body.id must be 'Any' or an array of non-empty strings.`,
}

export const guardChannelsQUERYServiceBody = guardBody('Object', expected, required, validation, exception)
