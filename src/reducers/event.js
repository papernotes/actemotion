import {ADD_EVENT, SET_MODAL_OPEN, SHOW_EVENT_INFO} from '../constants/ActionTypes';

const initialState = {
  isEditOpen: false,
  isInfoOpen: false,
  events: [{
              'title': 'All Day Event',
              'allDay': true,
              'start': new Date(),
              'end': new Date()
            }]
}

export default function event(state=initialState, action) {
  switch(action.type) {

    case SET_MODAL_OPEN:
      return Object.assign({}, state, {
        isEditOpen: action.bool
      });

    case SHOW_EVENT_INFO:
      return Object.assign({}, state, {
        isInfoOpen: action.bool
      });

    case ADD_EVENT:
      var newEvents = state.events;
      newEvents.push(action.newEvent);
      return Object.assign({}, state, {
        events: newEvents
      })

    default:
      return state
  }
}
