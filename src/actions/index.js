import * as types from '../constants/ActionTypes';

export function setNotifications(bool) {
  return {
    type: types.SET_NOTIFICATIONS, bool
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

export function setEventModal(bool) {
  return {
    type: types.SET_EVENT_MODAL, bool
  }
}

export function setActiveEvent(activeEvent) {
  return {
    type: types.SET_ACTIVE_EVENT, activeEvent
  }
}

export function deleteEvent(event) {
  return {
    type: types.DELETE_EVENT, event
  }
}

export function editEvent(event) {
  return {
    type: types.EDIT_EVENT, event
  }
}