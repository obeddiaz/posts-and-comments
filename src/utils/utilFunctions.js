/* eslint-disable import/prefer-default-export */
export function arrayToObject(array, keyAccess = 'id') {
  return array.reduce((object, item) => (
    { ...object, [item[keyAccess]]: item }
  ), {});
}
