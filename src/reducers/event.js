import {ADD_EVENT, SET_MODAL_OPEN, SET_EVENT_MODAL, SET_ACTIVE_EVENT, DELETE_EVENT} from '../constants/ActionTypes';
import TempEvents from '../constants/TempEvents';

// TODO remove TempEvents
const initialState = {
  isEditOpen: false,
  isInfoOpen: false,
  activeEvent: {},
  events: TempEvents
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
      console.log(action.newEvent)
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
      var currentEvents = state.events;
      for (var i in currentEvents) {
        if (JSON.stringify(currentEvents[i]) === JSON.stringify(action.event)) {
          currentEvents.splice(i, 1);
          break;
        }
      }
      return Object.assign({}, state, {
        events: currentEvents
      })

    default:
      return state
  }
}
