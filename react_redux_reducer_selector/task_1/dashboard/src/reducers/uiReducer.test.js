import uiReducer, { initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer task_1 (Immutable)', () => {
  it('returns initial state as Map when no action', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('handles DISPLAY_NOTIFICATION_DRAWER correctly', () => {
    const next = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(next.toJS().isNotificationDrawerVisible).toBe(true);
  });
});
