import { LocalStorage } from 'quasar'

export function insertHistory(state, image) {
  const history = state.history.filter(i => i.id !== image.id)

  history.splice(0, 0, image)
  state.history = history.slice(0, 10)

  LocalStorage.set('history', state.history)
}

export function setImage(state, image) {
  insertHistory(state, image)
  state.image = image
}
