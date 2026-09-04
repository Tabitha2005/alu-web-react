import { normalize } from 'normalizr';
import { notificationsSchema } from '../schemas/notifications';

// Action types
export const FETCH_NOTIFICATIONS_REQUEST = 'FETCH_NOTIFICATIONS_REQUEST';
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';
export const FETCH_NOTIFICATIONS_FAILURE = 'FETCH_NOTIFICATIONS_FAILURE';

// Action creators
export const fetchNotificationsRequest = () => ({ type: FETCH_NOTIFICATIONS_REQUEST });
export const fetchNotificationsSuccess = (entities, result) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: { entities, result }
});
export const fetchNotificationsFailure = (error) => ({ type: FETCH_NOTIFICATIONS_FAILURE, error });

// Thunk async action — accepts a fetchFn for easier testing
export const fetchAndNormalizeNotifications = (fetchFn) => {
  return async (dispatch) => {
    dispatch(fetchNotificationsRequest());
    try {
      const res = await fetchFn();
      const json = await res.json();
      const normalized = normalize(json, [notificationsSchema]);
      dispatch(fetchNotificationsSuccess(normalized.entities, normalized.result));
      return normalized;
    } catch (err) {
      dispatch(fetchNotificationsFailure(err.message || err));
      throw err;
    }
  };
};
