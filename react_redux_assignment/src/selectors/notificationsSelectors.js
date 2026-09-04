import { Map, List } from 'immutable';

// Selectors expect the reducer state (Immutable Map)
export const getLoading = (state) => state.get('loading');
export const getError = (state) => state.get('error');

export const getEntities = (state) => state.get('entities', Map());
export const getResult = (state) => state.get('result', List());

// Denormalize simple notifications list using entities and result
export const getNotificationsList = (state) => {
  const entities = getEntities(state);
  const result = getResult(state);
  return result.map((id) => {
    const notification = entities.getIn(['notifications', String(id)]) || Map();
    const authorId = notification.getIn(['author', 'id']);
    const author = entities.getIn(['users', String(authorId)]) || Map();
    return notification.set('author', author);
  });
};

export const getNotificationsCount = (state) => getResult(state).size;
