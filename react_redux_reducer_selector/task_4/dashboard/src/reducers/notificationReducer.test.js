import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('task_4 notificationReducer (Immutable + normalizr)', () => {
  it('normalizes and merges notifications', () => {
    const data = [
      { id: 1, author: { id: 2, name: 'John' }, type: 'default', value: 'A' }
    ];
    const next = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data });
    const js = next.toJS();
    expect(js.entities.notifications['1'].type).toBe('default');
  });

  it('set filter and mark as read via set and setIn', () => {
    const start = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: [{ id: 1, author: { id: 2 }, type: 'default', value: 'A' }] });
    const filtered = notificationReducer(start, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    expect(filtered.toJS().filter).toBe('URGENT');
    const marked = notificationReducer(filtered, { type: MARK_AS_READ, index: 1 });
    expect(marked.toJS().entities.notifications['1'].isRead).toBe(true);
  });
});
