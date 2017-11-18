import { combineReducers } from 'redux';
import heatMapLocations from './heatMapLocations';
import radius from './radius';
import resource from './resource';
import latLong from './latLong';

const reducers = combineReducers({
  heatMapLocations,
  radius,
  resource,
  latLong,
});

export default reducers;