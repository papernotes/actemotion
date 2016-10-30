import {CHANGE_TITLE} from '../constants/ActionTypes';

const initialState = {
  text: 'Change this title!'
}

export default function home(state=initialState, action) {
  switch(action.type) {

    case CHANGE_TITLE:
      return Object.assign({}, state, {
        text: 'Title has been changed!'
      });

    default:
      return state
  }
}