
export const actionTypes = {
  GET_LOCATION: ['GET_LOCATION', 'GET_LOCATION_SUCCESS', 'GET_LOCATION_FAILURE']
}

export function getLocations() {
  return {
    endpoint: 'https://opendata.utah.gov/resource/fs8x-4x6x.json',
    method: 'GET',
    types: actionTypes.GET_LOCATION,
    type: actionTypes.GET_LOCATION[0],
  }
}