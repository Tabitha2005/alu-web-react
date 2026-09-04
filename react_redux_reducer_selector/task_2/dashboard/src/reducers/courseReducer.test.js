import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer task_2', () => {
  it('returns default empty array', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('handles FETCH_COURSE_SUCCESS', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const next = courseReducer([], { type: FETCH_COURSE_SUCCESS, data });
    expect(next).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ]);
  });

  it('handles SELECT_COURSE', () => {
    const state = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false }
    ];
    const next = courseReducer(state, { type: SELECT_COURSE, index: 2 });
    expect(next.find((c) => c.id === 2).isSelected).toBe(true);
  });

  it('handles UNSELECT_COURSE', () => {
    const state = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true }
    ];
    const next = courseReducer(state, { type: UNSELECT_COURSE, index: 2 });
    expect(next.find((c) => c.id === 2).isSelected).toBe(false);
  });
});
