import { combineReducers } from 'redux'
import restaurantes from './restaurantes'
import cesta from './cesta'

export default combineReducers({
  restaurantes,
  cesta,
})
