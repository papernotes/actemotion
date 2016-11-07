import {ADD_EVENT, SET_MODAL_OPEN, SET_EVENT_MODAL, SET_ACTIVE_EVENT, 
        DELETE_EVENT, SET_EDIT_MODAL, SET_CONFIRM_MODAL, SAVE_EDIT, SET_NORMAL_EVENTS,
        SET_CONFIRM_ADDITION, SET_CONFIRM_EDIT} from '../constants/ActionTypes';
import TempEvents from '../constants/TempEvents';
import DataFormatter from '../utils/DataFormatter';

// TODO remove TempEvents
const initialState = {
  isAddOpen: false,
  isInfoOpen: false,
  isEditOpen: false,
  isConfirmOpen: false,
  confirmedAddition: false,
  confirmedEdit: false,
  activeEvent: {},
  events: TempEvents,
  renderEvents: TempEvents,
  showingNormalEvents: true
}

export default function event(state=initialState, action) {
  switch(action.type) {

    case SET_MODAL_OPEN:
      return Object.assign({}, state, {
        isAddOpen: action.bool
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
      });

    case SET_ACTIVE_EVENT:
      if (typeof(action.activeEvent) === 'boolean') {
        return state;
      }
      return Object.assign({}, state, {
        activeEvent: action.activeEvent
      });

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
      });

    case SET_EDIT_MODAL:
      return Object.assign({}, state, {
        isEditOpen: action.bool
      })

    case SET_CONFIRM_MODAL:
      return Object.assign({}, state, {
        isConfirmOpen: action.bool
      })

    case SAVE_EDIT:
      var cEvents = state.events;
      for (var j in cEvents) {
        if (JSON.stringify(cEvents[j]) === JSON.stringify(action.oldEvent)) {
          cEvents.splice(j, 1);
          break;
        }
      }
      cEvents.push(action.newEvent);
      return Object.assign({}, state, {
        events: cEvents
      })

    case SET_NORMAL_EVENTS:
      var formatter = new DataFormatter();
      var emotionEvents = formatter.generateEmotionEvents(state.events);

      if (action.bool) {
        return Object.assign({}, state, {
          renderEvents: state.events,
          showingNormalEvents: true
        })
      }
      else {
        return Object.assign({}, state, {
          renderEvents: emotionEvents,
          showingNormalEvents: false
        })
      }

    case SET_CONFIRM_ADDITION:
      return Object.assign({}, state, {
        confirmedAddition: action.bool
      })

    case SET_CONFIRM_EDIT:
      console.log("G")
      return Object.assign({}, state, {
        confirmedEdit: action.bool
      })

    default:
      return state
  }
}
