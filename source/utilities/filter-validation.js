/**
 * @param {(item: *) => boolean} validate
 *
 * @returns {(value: *) => boolean} The validation of a filter value, which is 'Any' or an array whose every item passes `validate`.
 */
export const filterValidation = validate => value =>
  Array.isArray(value)
    ? value.every(validate)
    : value === 'Any'
