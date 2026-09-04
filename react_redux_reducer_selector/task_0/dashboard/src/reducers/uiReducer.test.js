import uiReducer, { initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer task_0', () => {
  it('returns initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('returns initial state when unrelated action is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual(initialState);
  });

  it('handles DISPLAY_NOTIFICATION_DRAWER action', () => {
    const next = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(next.isNotificationDrawerVisible).toBe(true);
  });
});
