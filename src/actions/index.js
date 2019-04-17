import { CHANGE_QUOTE, CHANGE_COLOR } from '../constants'


export const changeQoute = (quote) => {
  return {
    type: CHANGE_QUOTE,
    quote
  }
}

export const changeColor = (color) => {
  return {
    type: CHANGE_COLOR,
    color
  }
}


