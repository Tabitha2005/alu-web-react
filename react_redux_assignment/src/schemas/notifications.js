import { schema } from 'normalizr';

export const author = new schema.Entity('users');

export const notificationsSchema = new schema.Entity('notifications', {
  author: author
});
