export const actionTypes = {
  GET_LAT_LONG: ['GET_LAT_LONG', 'GET_LAT_LONG_SUCCESS', 'GET_LAT_LONG_FAILURE'],
}

export function getLatLong(endpoint, resource) {
  return {
    endpoint,
    method: 'GET',
    types: actionTypes.GET_LAT_LONG,
    type: actionTypes.GET_LAT_LONG[0],
    params: {resource}
  }
}
