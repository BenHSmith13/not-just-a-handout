
export const actionTypes = {
  GET_HOMELESS: ['GET_HOMELESS', 'GET_HOMELESS_SUCCESS', 'GET_HOMELESS_FAILURE']
}

export function getHomeless() {
  return {
    endpoint: 'https://opendata.utah.gov/resource/8jmq-wd24.json',
    method: 'GET',
    types: actionTypes.GET_HOMELESS,
    type: actionTypes.GET_HOMELESS[0],
  }
}