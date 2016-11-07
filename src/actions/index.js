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

export function setEditModal(bool) {
  return {
    type: types.SET_EDIT_MODAL, bool
  }
}

export function setConfirmModal(bool) {
  return {
    type: types.SET_CONFIRM_MODAL, bool
  }
}

export function saveEdit(oldEvent, newEvent) {
  return {
    type: types.SAVE_EDIT, oldEvent, newEvent
  }
}

export function setNormalEvents(bool) {
  return {
    type: types.SET_NORMAL_EVENTS, bool
  }
}

export function setConfirmAddition(bool) {
  return {
    type: types.SET_CONFIRM_ADDITION, bool
  }
}