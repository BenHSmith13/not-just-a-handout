import _ from 'lodash';
import { actionTypes as mapActions } from '../actions/heatMapLocations';

const initalState = {};

export default function heatMapLocations(state = initalState, action) {
  switch (action.type) {
    case mapActions.GET_LOCATION[1]: {
      return { ...state, saltLake: _.get(action, 'payload.data[0]._2014_state_total') }
    }
    
    default:
      return state;
  }
}