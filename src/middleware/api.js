import _ from 'lodash';
import axios from 'axios';

const api = store => next => action => {
  if (action.endpoint) {
    const state = store.getState();
    if (action.method === 'GET') {
      axios.get(action.endpoint).then(res => {
        return next({ ...action, ...{ type: action.types[1], payload: res } })
      });
    } else if (action.method === 'POST') {
      axios.post(action.endpoint);
    }
  }
  next(action);
}

export default api;