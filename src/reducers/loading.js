import {
  RECEIVE_DATA,
  REFRESH,
} from '../actions/shared'

export default function loading (state = true, action) {
  switch (action.type) {
    case RECEIVE_DATA :
      return false;
    case REFRESH :
      return true;
    default :
      return state;
  }
}