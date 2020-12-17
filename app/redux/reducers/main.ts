
export const SET_TRAMITE_NUEVO="SET_TRAMITE_NUEVO"
export const SAVE_TRAMITE = "SAVE_TRAMITE"
export const SET_UPDATE_BORRADOR = 'SET_UPDATE_BORRADOR'
export const SET_STATUS_GENERAL_TRAMITE = 'SET_STATUS_GENERAL_TRAMITE'
export const SET_PASOS ={
  SET_PASO_INSCRIPCION : "SET_PASO_INSCRIPCION",
  SET_PASO_INFORMACION : "SET_PASO_INFORMACION",
  SET_PASO_BALANCES : "SET_PASO_BALANCES",
  SET_PASO_OBRAS :  "SET_PASO_OBRAS",
  SET_PASO_ENVIAR : "SET_PASO_ENVIAR"
}


export const initialStateReducer = (state, action) => {
    switch (action.type) {
      case SET_TRAMITE_NUEVO:
        return {...state,tipoAccion: action.tipoAccion, tramiteAlta:null}
      case SET_STATUS_GENERAL_TRAMITE:
        return {...state,resultadoAnalisisTramiteGeneral: action.status}
      case SET_UPDATE_BORRADOR:
        return {...state,tramiteAlta: action.tramite,tipoAccion: action.tipoAccion}
      case SET_PASOS.SET_PASO_INSCRIPCION:
        return {...state,paso: action.paso}
      case SET_PASOS.SET_PASO_INFORMACION:
        return {...state,paso: action.paso}
      case SET_PASOS.SET_PASO_BALANCES:
        return {...state,paso: action.paso}
      case SET_PASOS.SET_PASO_OBRAS:
        return {...state,paso: action.paso}
      case SET_PASOS.SET_PASO_ENVIAR:
        return {...state,paso: action.paso}
      case SAVE_TRAMITE:
        return {...state,tramiteAlta: action.tramite}
      default:
        return { ...state }
    }
}