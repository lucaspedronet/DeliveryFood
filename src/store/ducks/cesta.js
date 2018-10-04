export const Type = {
  GET_REQUEST: 'cesta/GET_REQUEST',
  GET_SUCCESS: 'cesta/GET_SUCCESS',
  GET_FAILURE: 'cesta/GET_FAILURE',
}

const initialState = {
  cesta: [],
  loading: false,
  error: null,
}

export default function cesta(state = initialState, action) {
  switch (action.type) {
    case Type.GET_REQUEST:
      return { ...state, loading: true };
    case Type.GET_SUCCESS:
      return {
        cesta: action.payload.cesta,
        loading: false,
        error: null,
      };
    case Type.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export const Creators = {
  getCestaRequest: pedido => ({
    type: Type.GET_REQUEST,
    payload: { pedido },
  }),
  getCestaSuccess: cesta => ({
    type: Type.GET_SUCCESS,
    payload: { cesta },
  }),
  getCestaFailure: error => ({
    type: Type.GET_FAILURE,
    payload: { error },
  }),
}
