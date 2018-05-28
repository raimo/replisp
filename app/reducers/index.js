import clone        from 'clone';
import assign       from 'object-assign';
import {
  TOGGLE_COLOR,
  EXAMPLE_REQUEST_START,
  EXAMPLE_REQUEST_DATA,
  EVAL_SUCCESS,
  EVAL_ERROR,
} from '../constants/Constants';

const initialState = {
  color: 'red',
  query: "(let\n (\n  (plastic (1 \"Plastic\" 1907))\n  (name (lambda (x) (first (rest x))))\n  (born-in (lambda (x) (first (rest (rest x)))))\n )\n (let\n  (\n   (age (lambda (x) (- 2018 (born-in x))))\n  )\n  (+ (name plastic) \" is \" (age plastic) \" years old\")))\n",
  result: '',
  data: {
    loading: false,
    objects: [],
  },
};

export default function reduce(state = initialState, action) {
  switch (action.type) {

  case EVAL_SUCCESS:
    return assign({}, state, {
      result: (typeof action.result == 'object' ? JSON.stringify(action.result) : action.result),
      query: action.query,
      color: 'green'
    });
  case EVAL_ERROR:
    return assign({}, state, {
      result: action.result,
      query: action.query,
      color: 'red'
    });

  case TOGGLE_COLOR:
    return assign({}, state, {
      color: state.color === 'red' ? 'blue' : 'red'
    });

  case EXAMPLE_REQUEST_START:
    return assign({}, state, {
      data: assign({}, state.data, {
        loading: true,
      }),
    });

  case EXAMPLE_REQUEST_DATA:
    return assign({}, state, {
      data: assign({}, state.data, {
        loading: false,
        objects: action.data,
      }),
    });

  default:
    return state;
  }
}
