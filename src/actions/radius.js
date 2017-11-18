export const actionTypes = {
  GET_RADIUS: ['GET_RADIUS', 'GET_RADIUS_SUCCESS', 'GET_RADIUS_FAILURE']
}

export function getRadius(endpoint) {
  return {
    endpoint,
    method: 'GET',
    types: actionTypes.GET_RADIUS,
    type: actionTypes.GET_RADIUS[0],
  }
}