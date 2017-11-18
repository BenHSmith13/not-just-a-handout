import axios from 'axios';

const api = store => next => action => {
  if (action.endpoint) {
    if (action.method === 'GET') {
      axios.get(action.endpoint)
      .then(res => {
        return next({ ...action, ...{ type: action.types[1], payload: res } })
      })
      .catch( err => {
        // debugger
      });
    } else if (action.method === 'POST') {
      axios.post(action.endpoint, { ...action.payload });
    }
  }
  next(action);
}

export default api;
