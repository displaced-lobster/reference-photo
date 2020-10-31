import { LocalStorage } from 'quasar'

const history = LocalStorage.has('history') ? LocalStorage.getItem('history') : []

export default function () {
  return {
    image: { alt: undefined, id: undefined, src: undefined, thumb: undefined },
    history,
  }
}
