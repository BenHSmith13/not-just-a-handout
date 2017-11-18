import _ from 'lodash';
import { actionTypes as mapActions } from '../actions/heatMapLocations';

const initalState = [];

export default function heatMapLocations(state = initalState, action) {
  switch (action.type) {
    case mapActions.GET_LOCATION[1]: {
      return _.map(action.payload.data, item => {
        return _.get(item, 'location_1.coordinates');
      });
    }
    
    default:
      return state;
  }
}