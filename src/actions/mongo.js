
export const actionTypes = {
  SET_RESOURCE: ['SET_RESOURCE', 'SET_RESOURCE_SUCCESS', 'SET_RESOURCE_FAILURE'],
  GET_RESOURCES: ['GET_RESOURCES', 'GET_RESOURCES_SUCCESS', 'GET_RESOURCES_FAILURE']
}

export function addResource(res) {
  return {
    endpoint: 'http://localhost:8000/resources',
    method: 'POST',
    types: actionTypes.SET_RESOURCE,
    type: actionTypes.SET_RESOURCE[0],
    payload: res
  }
}

export function getResources() {
  return {
    endpoint: 'http://localhost:8000/resources',
    method: 'GET',
    types: actionTypes.GET_RESOURCES,
    type: actionTypes.GET_RESOURCES[0]
  }
}