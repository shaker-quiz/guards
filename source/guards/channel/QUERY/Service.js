import { ChannelProp, ChannelPropException, ChannelPropValidation } from '../../../entities/channel.js'
import { guardBody } from '../../../utilities/guard-body.js'

let expected = [
  ChannelProp.id,
]

let required = [
  ChannelProp.id,
]

let validation = ChannelPropValidation

let exception = ChannelPropException

export const guardChannelQUERYServiceBody = guardBody('Object', expected, required, validation, exception)
