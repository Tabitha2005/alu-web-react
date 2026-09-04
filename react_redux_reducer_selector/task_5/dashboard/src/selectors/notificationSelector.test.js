import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { Map, fromJS } from 'immutable';

describe('task_5 notification selectors', () => {
  const state = fromJS({
    filter: 'DEFAULT',
    entities: {
      notifications: {
        "1": { id: 1, isRead: false, type: 'default', value: 'A' },
        "2": { id: 2, isRead: true, type: 'urgent', value: 'B' }
      }
    }
  });

  it('filterTypeSelected returns filter', () => {
    expect(filterTypeSelected(state)).toBe('DEFAULT');
  });

  it('getNotifications returns notifications map', () => {
    const notifications = getNotifications(state);
    expect(notifications.get('1').get('value')).toBe('A');
  });

  it('getUnreadNotifications returns only unread', () => {
    const unread = getUnreadNotifications(state);
    expect(Object.keys(unread)).toContain('1');
    expect(unread['1'].value).toBe('A');
    expect(unread['2']).toBeUndefined();
  });
});
