import reducer, { initialState } from '../src/reducers/notificationsReducer';
import { fetchNotificationsSuccess, fetchNotificationsRequest, fetchNotificationsFailure } from '../src/actions/notificationsActions';
import { getLoading, getError, getNotificationsList, getNotificationsCount } from '../src/selectors/notificationsSelectors';
import fs from 'fs';
import path from 'path';

const fixturesPath = path.join(__dirname, '..', 'fixtures', 'notifications.json');
const fixtures = JSON.parse(fs.readFileSync(fixturesPath, 'utf8'));

describe('notifications reducer and selectors', () => {
  it('handles request action', () => {
    const next = reducer(initialState, fetchNotificationsRequest());
    expect(getLoading(next)).toBe(true);
    expect(getError(next)).toBe(null);
  });

  it('handles success action and selectors return denormalized list', () => {
    // Create a normalized payload similar to normalizr output
    const entities = {
      notifications: {
        "1": { id: 1, author: { id: 2 }, message: 'Welcome' },
        "2": { id: 2, author: { id: 3 }, message: 'Hi' }
      },
      users: {
        "2": { id: 2, name: 'John' },
        "3": { id: 3, name: 'Jane' }
      }
    };
    const result = [1, 2];

    const next = reducer(initialState, fetchNotificationsSuccess(entities, result));
    expect(getLoading(next)).toBe(false);
    expect(getError(next)).toBe(null);
    const list = getNotificationsList(next);
    expect(getNotificationsCount(next)).toBe(2);
    expect(list.size).toBe(2);
    // check author denormalized
    expect(list.get(0).getIn(['author', 'name'])).toBe('John');
  });

  it('handles failure action', () => {
    const next = reducer(initialState, fetchNotificationsFailure('oops'));
    expect(getLoading(next)).toBe(false);
    expect(getError(next)).toBe('oops');
  });
});
