import { isStringTag } from '@yurkimus/string-tag'

/**
 * @param {'Object'} stringTag
 * @param {string[]} expected The props the body may have.
 * @param {string[]} required The props the body must have (a subset of `expected`).
 * @param {Record<string, (value: *) => boolean>} validation
 * @param {Record<string, string>} exception
 *
 * @returns {(body: Record<string, *>) => string} The guard, which takes the body and returns the message of the first violation, or '' (the neutral element) when there is none.
 */
export const guardBody = (stringTag, expected, required, validation, exception) => body => {
  if (body === undefined)
    return 'Body must be valid JSON.'

  if (!isStringTag(stringTag, body))
    return `Body must be ${stringTag}.`

  if (Object.keys(body).length === 0)
    return 'Body must not be empty.'

  for (let prop of Object.keys(body))
    if (!expected.includes(prop))
      return 'Body must not have additional props.'

  for (let prop of required)
    if (!Object.hasOwn(body, prop))
      return `Body.${prop} is required.`

  for (let prop of Object.keys(body))
    if (!validation[prop](body[prop]))
      return exception[prop]

  return ''
}
