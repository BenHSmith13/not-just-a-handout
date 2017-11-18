import { combineReducers } from 'redux';
import heatMapLocations from './heatMapLocations';
import radius from './radius';

const reducers = combineReducers({
  heatMapLocations,
  radius,
});

export default reducers;