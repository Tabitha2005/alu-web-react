export const filterTypeSelected = (state) => state.get('filter');

export const getNotifications = (state) => {
  const entities = state.getIn(['entities', 'notifications'], null);
  return entities || null;
};

export const getUnreadNotifications = (state) => {
  const entities = state.getIn(['entities', 'notifications'], null);
  if (!entities) return null;
  const result = {};
  Object.keys(entities.toJS()).forEach((k) => {
    const n = entities.get(String(k));
    if (!n.get('isRead')) {
      result[k] = n.toJS();
    }
  });
  return result;
};
