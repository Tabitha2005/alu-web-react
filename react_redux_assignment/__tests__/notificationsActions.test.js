import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fs from 'fs';
import path from 'path';

import {
  fetchAndNormalizeNotifications,
  FETCH_NOTIFICATIONS_REQUEST,
  FETCH_NOTIFICATIONS_SUCCESS,
  FETCH_NOTIFICATIONS_FAILURE
} from '../src/actions/notificationsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const fixturesPath = path.join(__dirname, '..', 'fixtures', 'notifications.json');
const fixtures = JSON.parse(fs.readFileSync(fixturesPath, 'utf8'));

describe('notifications actions', () => {
  it('dispatches success when fetch and normalize succeed', async () => {
    const store = mockStore({});

    // mock fetch function returning fixture JSON
    const fetchFn = async () => ({ json: async () => fixtures });

    await store.dispatch(fetchAndNormalizeNotifications(fetchFn));

    const actions = store.getActions();
    expect(actions[0].type).toBe(FETCH_NOTIFICATIONS_REQUEST);
    expect(actions[1].type).toBe(FETCH_NOTIFICATIONS_SUCCESS);
    // payload contains entities and result
    expect(actions[1].payload).toHaveProperty('entities');
    expect(actions[1].payload).toHaveProperty('result');
  });

  it('dispatches failure when fetch throws', async () => {
    const store = mockStore({});
    const fetchFn = async () => { throw new Error('network'); };

    await expect(store.dispatch(fetchAndNormalizeNotifications(fetchFn))).rejects.toThrow('network');
    const actions = store.getActions();
    expect(actions[0].type).toBe(FETCH_NOTIFICATIONS_REQUEST);
    expect(actions[1].type).toBe(FETCH_NOTIFICATIONS_FAILURE);
  });
});
