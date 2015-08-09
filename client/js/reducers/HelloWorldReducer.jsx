/* eslint no-shadow: 0 */

import * as actionTypes  from '../constants/HelloWorldConstants';


const initialState = {
  type: null,
  name: 'Alex'
};

export default function dummy(state = initialState, action) {

  const { type, name } = action;

  switch (type) {

    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return {
        type,
        name
      };

    default:
      return state;

  }

}
