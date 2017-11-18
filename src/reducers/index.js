import { combineReducers } from 'redux';
import heatMapLocations from './heatMapLocations';
import radius from './radius';
import resource from './resource';
import openData from './open_data';

const reducers = combineReducers({
  heatMapLocations,
  radius,
  resource,
  openData,
});

export default reducers;