import { actionTypes as latLongActions } from '../actions/latLong';
import _ from 'lodash';

const initalState = {};

export default function latLond(state = initalState, action) {
  switch (action.type) {
    case latLongActions.GET_LAT_LONG[1]: {
      const newState = _.cloneDeep(state);
      const latLong = action.payload.data.results[0].geometry.location
      newState[action.params.resource._id] = latLong;
      return newState
    }

    default:
      return state;
  }
}