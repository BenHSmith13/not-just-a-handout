import { combineReducers } from 'redux';
import heatMapLocations from './heatMapLocations';
import radius from './radius';
import resource from './resource';

const reducers = combineReducers({
  heatMapLocations,
  radius,
  resource,
});

export default reducers;