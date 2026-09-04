import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

export default function courseReducer(state = [], action = {}) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((c) => ({ ...c, isSelected: false }));
    case SELECT_COURSE:
      return state.map((c) => (c.id === action.index ? { ...c, isSelected: true } : c));
    case UNSELECT_COURSE:
      return state.map((c) => (c.id === action.index ? { ...c, isSelected: false } : c));
    default:
      return state;
  }
}
