import { combineReducers } from 'redux';
import heatMapLocations from './heatMapLocations';
import latLong from './latLong';
import openData from './open_data';
import resource from './resource';

const reducers = combineReducers({
  heatMapLocations,
  latLong,
  openData,
  resource,
});

export default reducers;