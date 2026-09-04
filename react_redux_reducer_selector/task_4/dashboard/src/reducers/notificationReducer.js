import { Map, fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

const initialState = Map({ filter: 'DEFAULT', entities: Map(), result: [] });

export default function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalized = notificationsNormalizer(action.data);
      return state.merge(fromJS(normalized));
    }
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case MARK_AS_READ:
      return state.setIn(['entities', 'notifications', String(action.index), 'isRead'], true);
    default:
      return state;
  }
}
