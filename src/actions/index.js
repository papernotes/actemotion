import * as types from '../constants/ActionTypes';

export function changeTitle() {
  return {
    type: types.CHANGE_TITLE
  }
}

export function addEvent() {
  return {
    type: types.ADD_EVENT
  }
}

export function setModalOpen(bool) {
  return {
    type: types.SET_MODAL_OPEN, bool
  }
}