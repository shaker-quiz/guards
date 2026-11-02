import { isStringTag } from '@yurkimus/string-tag'

/**
 * @param {'Object'} stringTag
 * @param {Record<string, (value: *) => boolean>} validation
 * @param {Record<string, string>} exception
 *
 * @returns {(body: Record<string, *>, props: string[]) => string} The guard, which takes the body and the props of it to validate (each of them must be present and valid), and returns the message of the first violation, or '' (the neutral element) when there is none.
 */
export const guardBody = (stringTag, validation, exception) => (body, props) => {
  if (body === undefined)
    return 'Body must be valid JSON.'

  if (!isStringTag(stringTag, body))
    return `Body must be ${stringTag}.`

  if (Object.keys(body).length === 0)
    return 'Body must not be empty.'

  for (let prop of Object.keys(body))
    if (!Object.hasOwn(validation, prop))
      return 'Body must not have additional props.'

  for (let prop of props)
    if (!validation[prop](body[prop]))
      return exception[prop]

  return ''
}
