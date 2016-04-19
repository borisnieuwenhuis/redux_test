import {setEntries, next, vote, INITIAL_STATE} from './core';
import {Map} from 'immutable';

export default function reducer(state=INITIAL_STATE, action) {
  // Figure out which function to call and call it

  if (!state) {
        state = Map({});
  }
  const func = action.type;
  if (func=='SET_ENTRIES') {
    return setEntries(state, action.entries);
  }
  else if (func=='NEXT') {
    return next(state)
  }
  else if (func=='VOTE') {
    return vote(state, action.entry)
  }

  return state;
}
