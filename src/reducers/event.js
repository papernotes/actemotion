import {ADD_EVENT, SET_MODAL_OPEN, SHOW_EVENT_INFO, SET_ACTIVE_EVENT} from '../constants/ActionTypes';

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
              'text': 'test',
              'type': 'school'
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

    case SET_ACTIVE_EVENT:
      if (typeof(action.activeEvent) === 'boolean') {
        return state
      }
      return Object.assign({}, state, {
        activeEvent: action.activeEvent
      })

    default:
      return state
  }
}
