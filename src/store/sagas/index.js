import { all, takeLatest } from 'redux-saga/effects'
import { Type as RestaurantesTypes } from '../ducks/restaurantes'
import { Type as CestaTypes } from '../ducks/cesta'

import { getRestaurante } from './restaurantes'
import { getCesta } from './cesta'

export default function* rootSaga() {
  return yield all([
    takeLatest(RestaurantesTypes.GET_REQUEST, getRestaurante),
    takeLatest(CestaTypes.GET_REQUEST, getCesta)
  ])
}
