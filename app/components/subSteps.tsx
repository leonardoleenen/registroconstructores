import React from 'react';
import { Steps} from 'antd';
import { PlusOutlined ,ArrowRightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'


const { Step } = Steps;

export default (props) => {
  const router = useRouter()

  return <div className="m-auto text-base mt-8" style={{width:"450px"}}>
  {!props.esPersonaFisica ?
  <Steps progressDot current={props.current}>
  <Step title="Domicilio"  onClick={() => router.push('/domicilio')} className="cursor-pointer"/>
  <Step title="Sociedad" onClick={() => router.push('/informacion_societaria')} className="cursor-pointer" />
  <Step title="Propietarios" onClick={() => router.push('/informacion_propietarios')} className="cursor-pointer" />
</Steps>:
  <Steps progressDot current={props.current}>
    <Step title="Domicilio"  onClick={() => router.push('/domicilio')} className="cursor-pointer"/>
    <Step title="Registral" onClick={() => router.push('/informacion_societaria')} className="cursor-pointer" />
  </Steps>}
  </div>
}








