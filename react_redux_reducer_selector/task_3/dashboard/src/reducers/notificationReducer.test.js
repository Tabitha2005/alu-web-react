import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer task_3', () => {
  it('handles FETCH_NOTIFICATIONS_SUCCESS', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    const next = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data });
    expect(next.notifications.length).toBe(2);
    expect(next.notifications[0].isRead).toBe(false);
  });

  it('handles MARK_AS_READ', () => {
    const start = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'A' },
        { id: 2, isRead: false, type: 'urgent', value: 'B' }
      ]
    };
    const next = notificationReducer(start, { type: MARK_AS_READ, index: 2 });
    expect(next.notifications.find((n) => n.id === 2).isRead).toBe(true);
  });

  it('handles SET_TYPE_FILTER', () => {
    const next = notificationReducer(undefined, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    expect(next.filter).toBe('URGENT');
  });
});
