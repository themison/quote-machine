import { CHANGE_QUOTE } from '../constants'


const quote = (state = {}, action) => {
  switch(action.type) {
    case CHANGE_QUOTE:
      return { 
        quote: action.quote.quote, 
        author: action.quote.author
      }
    default:
      return state;
  }
}

export default quote;