import { CHANGE_COLOR } from '../constants'


const color = (state = {}, action) => {
  switch(action.type) {
    case CHANGE_COLOR:
      return action.color;
    default:
      return state;
  }
}

export default color;