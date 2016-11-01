import * as types from '../constants/ActionTypes';

export function changeTitle() {
  return {
    type: types.CHANGE_TITLE
  }
}

export function addEvent(newEvent) {
  return {
    type: types.ADD_EVENT, newEvent
  }
}

export function setModalOpen(bool) {
  return {
    type: types.SET_MODAL_OPEN, bool
  }
}


export function showEventInfo(bool) {
  return {
    type: types.SHOW_EVENT_INFO, bool
  }
}