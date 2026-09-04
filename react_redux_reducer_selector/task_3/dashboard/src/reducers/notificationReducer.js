import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

const initialState = {
  filter: 'DEFAULT',
  notifications: []
};

export default function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: (action.data || []).map((n) => ({ ...n, isRead: false }))
      };
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((n) => (n.id === action.index ? { ...n, isRead: true } : n))
      };
    case SET_TYPE_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}
