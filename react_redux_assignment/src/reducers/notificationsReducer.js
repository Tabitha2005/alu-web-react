import { Map, List, fromJS } from 'immutable';
import {
  FETCH_NOTIFICATIONS_REQUEST,
  FETCH_NOTIFICATIONS_SUCCESS,
  FETCH_NOTIFICATIONS_FAILURE
} from '../actions/notificationsActions';

const initialState = Map({
  loading: false,
  error: null,
  entities: Map(), // entities.notifications and entities.users
  result: List()
});

// Reducer must be pure and avoid mutation; using Immutable helps ensure immutability
export default function notificationsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_REQUEST:
      return state.set('loading', true).set('error', null);
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const { entities, result } = action.payload;
      // store entities as Immutable Maps
      const entitiesMap = fromJS(entities || {});
      return state
        .set('loading', false)
        .set('error', null)
        .set('entities', entitiesMap)
        .set('result', fromJS(result || []));
    }
    case FETCH_NOTIFICATIONS_FAILURE:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export { initialState };
