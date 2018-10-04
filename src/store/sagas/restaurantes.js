import api from '../../services/api'

import { call, put } from 'redux-saga/effects'

import { Creators as RestaurantesActions } from '../ducks/restaurantes'

export function* getRestaurante(action) {
  try {
    if (action.payload.search === undefined) {
      const response = yield call(api.get, '/restaurants')
      yield put(RestaurantesActions.getRestauranteSuccess(response.data))
      return null;
    }
    else {
      const response = yield call(api.get, `/restaurants?q=${action.payload.search}`)
      yield put(RestaurantesActions.getRestauranteSuccess(response.data))
    }
  } catch (err) {
    yield put(RestaurantesActions.getRestauranteFailure('Erro ao buscar dados na API!'))
  }
}
