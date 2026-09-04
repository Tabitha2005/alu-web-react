import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

describe('task_4 courseReducer (Immutable + normalizr)', () => {
  it('normalizes and merges course data', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 }
    ];
    const next = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data });
    const js = next.toJS();
    expect(js.entities.courses['1'].name).toBe('ES6');
  });
});
