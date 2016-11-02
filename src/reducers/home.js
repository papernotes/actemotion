import {SET_NOTIFICATIONS} from '../constants/ActionTypes';

const initialState = {
  notificationsOn: false
}

export default function home(state=initialState, action) {
  switch(action.type) {

    case SET_NOTIFICATIONS:
      return Object.assign({}, state, {
        notificationsOn: action.bool
      });

    default:
      return state
  }
}
