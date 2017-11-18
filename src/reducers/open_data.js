import _ from 'lodash';
import { actionTypes as dataActions } from '../actions/open_data';

const initalState = {
  generalHomeless: [],
};

export default function heatMapLocations(state = initalState, action) {
  switch (action.type) {
    case dataActions.GET_HOMELESS[1]: {
      return { ...state, generalHomeless: action.payload.data }
    }
    
    default:
      return state;
  }
}