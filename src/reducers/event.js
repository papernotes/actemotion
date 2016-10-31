import {ADD_EVENT, SET_MODAL_OPEN} from '../constants/ActionTypes';

const initialState = {
  isModalOpen: false,
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
        isModalOpen: action.bool
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