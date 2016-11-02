import {ADD_EVENT, SET_MODAL_OPEN, SET_EVENT_MODAL, SET_ACTIVE_EVENT, DELETE_EVENT} from '../constants/ActionTypes';

const initialState = {
  isEditOpen: false,
  isInfoOpen: false,
  activeEvent: {},
  events: [{
              'title': 'Test Event',
              'allDay': false,
              'start': new Date(),
              'end': new Date(),
              'energy': 2,
              'text': 'test paragraph text',
              'type': 'school'
            }]
}

export default function event(state=initialState, action) {
  switch(action.type) {

    case SET_MODAL_OPEN:
      return Object.assign({}, state, {
        isEditOpen: action.bool
      });

    case SET_EVENT_MODAL:
      return Object.assign({}, state, {
        isInfoOpen: action.bool
      });

    case ADD_EVENT:
      var newEvents = state.events;
      newEvents.push(action.newEvent);
      return Object.assign({}, state, {
        events: newEvents
      })

    case SET_ACTIVE_EVENT:
      if (typeof(action.activeEvent) === 'boolean') {
        return state
      }
      return Object.assign({}, state, {
        activeEvent: action.activeEvent
      })

    case DELETE_EVENT:
      return state

    default:
      return state
  }
}
