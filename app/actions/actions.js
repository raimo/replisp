import {
  TOGGLE_COLOR,
  EXAMPLE_REQUEST_START,
  EXAMPLE_REQUEST_DATA,
  EVAL_SUCCESS,
  EVAL_ERROR,
} from '../constants/Constants';
import {
  exampleRequest,
} from '../requester';

import { littleLisp } from '../evaluators/littlelisp';

export function evalQuery(q) {
  return dispatch => {
    let query = q.target && q.target.value || q;
    try {
      let val = littleLisp.interpret(littleLisp.parse(query));
      dispatch({
	type: EVAL_SUCCESS,
	query: query,
	result: val
      });
    } catch (e) {
      dispatch({
	type: EVAL_ERROR,
	query: query,
	result: 'invalid query'
      });
    }
  };
}

/** Toggle the hello world color */
export function toggleColor() {
  return { type: TOGGLE_COLOR };
}

/** An example async action using the request module */
export function exampleAsync() {
  return dispatch => {
    dispatch({ type: EXAMPLE_REQUEST_START });
    exampleRequest().then(data => {
      dispatch({ type: EXAMPLE_REQUEST_DATA, data: data });
    });
  };
}
