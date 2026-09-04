import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const notification = new schema.Entity('notifications', { author: user });

export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}

export { notification, user };
