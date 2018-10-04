

import api from 'services/api'
import { call, put } from 'redux-saga/effects'
import { Creators as CestaActions } from 'store/ducks/cesta'


export function* getCesta(action) {
  try {
    const response = yield call(api.get, `/restaurants?q=${action.payload.pedido}`)
    yield put(CestaActions.getCestaSuccess(response.data))
    //data é um campo/atributo que todo os initialState possui por padrão e que armazena os dados obtidos na requisição a API.
  } catch (err) {
    yield put(CestaActions.getCestaFailure('Erro ao buscar Items na Api.'))
  }

}
