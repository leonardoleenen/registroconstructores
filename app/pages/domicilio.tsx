import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/router'
import {NavigationStep} from '../components/steps'
import InputText from '../components/input_text'
import {HeaderPrincipal} from '../components/header'
import Upload from '../components/upload'
import { Button, Steps } from 'antd';
import Substeps from '../components/subSteps'
import {useSelector} from 'react-redux'
import { getEmptyTramiteAlta, getTramiteByCUIT, isConstructora ,isPersonaFisica} from '../services/business';
import {useDispatch} from 'react-redux'
import { saveTramite } from '../redux/actions/main'
import { Loading } from '../components/loading';


const { Step } = Steps;
export default () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [waitingType, setWaitingType] = useState<'sync' | 'waiting'>('waiting')
  const statusGeneralTramite = useSelector( state => state.appStatus.resultadoAnalisisTramiteGeneral)
  const [tramite, setTramite] = useState<TramiteAlta>(useSelector(state => state.appStatus.tramiteAlta) || getEmptyTramiteAlta())


  useEffect(() => {
    if (!tramite.cuit)
      router.push('/')
  },[])


  const updateObjTramite = () => {
    setTramite(Object.assign({},tramite))
  } 

  const save = async () => {
    setWaitingType('sync')
    
    setIsLoading(true)
    if (tramite._id){
      await dispatch(saveTramite(tramite))
    } else {
      if (!(await getTramiteByCUIT(tramite.cuit)))
        await dispatch(saveTramite(tramite))
    }
  }

  if (isLoading)
    return <Loading message="" type={waitingType} />

  return <div>
   <HeaderPrincipal tramite={tramite} onExit={() => router.push('/')} onSave={() => {
      save()
      router.push('/')
    }}/>
    <div className="border-gray-200 border-b-2 py-4">
      <NavigationStep current={1}  generalStatus={statusGeneralTramite} completaBalanceYObras={!isPersonaFisica(tramite) || isConstructora(tramite) }/>
    </div>
    {!isPersonaFisica(tramite) ? <div className="w-2/5 m-auto text-base mt-8">
      <Substeps progressDot current={0} />
    </div>:''}
    <div className="px-20 py-6 ">
      <div className="text-2xl font-bold py-4"> Domicilio Legal</div>
        <div >
          <InputText
            label="Domicilio"
            labelRequired="*"
            value={tramite.domicilioLegal}
            bindFunction={(value) => {
              tramite.domicilioLegal = value
              updateObjTramite()
            }}
            placeHolder="Indique calle,numero,provincia"
            labelObservation=""
            labeltooltip=""
            labelMessageError=""
            required />
        </div>
      <div className="text-2xl font-bold py-4"> Domicilio Real</div>
        <div>
          <InputText
            value={tramite.domicilioReal}

            bindFunction={(value) => {
              tramite.domicilioReal = value
              updateObjTramite()
            }}
            label="Domicilio"
            labelRequired="*"
            placeHolder="Indique calle,numero,provincia"
            labelObservation=""
            labeltooltip=""
            labelMessageError=""
            required />
        </div>
        <div className="text-2xl font-bold py-4"> Domicilio Electronico</div>
        <div>
          <InputText
            value={tramite.emailInstitucional}
            bindFunction={(value) => {
              tramite.emailInstitucional = value
              updateObjTramite()
            }} 
            type="email"
            label="Email institucional"
            labelRequired="*"
            placeHolder="Email Institucional"
          />
        </div>

       
      <div className="pt-4">
        <Upload
            label="Adjunte un documento en donde conste el ultimo domicilio real inscripto en la IGJ o Registro de Comercio "
            labelRequired="*"
            labelMessageError=""
          />
          
       
      </div>

      <div className="mt-6 pt-6 text-center">
          <Button type="primary"  onClick={() => {
            if (!tramite || !tramite.cuit)
              return 
            save()
            setIsLoading(true)
            if (isPersonaFisica)
              router.push('/enviar_tramite')
            else
              router.push('/informacion_societaria')
          }}> Guardar y Seguir</Button>
         </div>

    </div>

  </div>
}


