import { schema, normalize } from 'normalizr';

const course = new schema.Entity('courses');

export function coursesNormalizer(data) {
  const normalized = normalize(data, [course]);
  return normalized;
}

export { course };
