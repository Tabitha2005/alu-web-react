import { Map, fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

const initialState = Map({ entities: Map(), result: [] });

export default function courseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalized = coursesNormalizer(action.data);
      return state.merge(fromJS(normalized));
    }
    case SELECT_COURSE:
      return state.setIn(['entities', 'courses', String(action.index), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['entities', 'courses', String(action.index), 'isSelected'], false);
    default:
      return state;
  }
}
