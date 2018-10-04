export const Type = {
  GET_REQUEST: 'restaurantes/GET_REQUEST',
  GET_SUCCESS: 'restaurantes/GET_SUCCESS',
  GET_FAILURE: 'restaurantes/GET_FAILURE',
}

const initialState = {
  data: [],
  loading: false,
  erro: null,
}
export default function restaurantes(state = initialState, action) {
  switch (action.type) {
    case Type.GET_REQUEST:
      return { ...state, loading: true };
    case Type.GET_SUCCESS:
      return { data: action.payload.data, loading: false, erro: null };
    case Type.GET_FAILURE:
      return { ...state, loading: false, erro: action.payload.erro };
    default:
      return state;
  }
}

export const Creators = {
  getRestauranteRequest: search => ({
    type: Type.GET_REQUEST,
    payload: { search }
  }),
  getRestauranteSuccess: data => ({
    type: Type.GET_SUCCESS,
    payload: { data },
  }),
  getRestauranteFailure: erro => ({
    type: Type.GET_FAILURE,
    payload: { erro },
  }),
}
