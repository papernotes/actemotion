import {SET_MODAL_OPEN} from '../constants/ActionTypes';

const initialState = {
  isModalOpen: false,
  events: [{
              'title': 'All Day Event',
              'allDay': true,
              'start': new Date(2015, 3, 0),
              'end': new Date(2015, 3, 0)
            }]
}

export default function event(state=initialState, action) {
  switch(action.type) {

    case SET_MODAL_OPEN:
      return Object.assign({}, state, {
        isModalOpen: action.bool
      });

    default:
      return state
  }
}