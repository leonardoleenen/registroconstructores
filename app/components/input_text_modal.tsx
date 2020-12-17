import React, { useState } from 'react'
import { Button, Input,Tooltip, } from 'antd';
import { LikeFilled, DislikeFilled } from '@ant-design/icons';


const customColors = ['#2897D4'];
const colors = [
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
];



interface Props { 
  label:string
  labelMessageError?: string
  labelRequired?: string
  value?: any
  bindFunction?: Function
  placeholder?: string
  required?: boolean 
  disabled?: boolean
  type?:string
  step?:any
}

export default (props: Props) => {

  return (<div >
    <div className="flex">
      <div className="w-5/5 mb-2">
      <label className="font-bold text-sm">{props.label}<span className="text-danger-700 ml-1">{props.labelRequired}</span></label>
      </div>

      

    </div>
    <div className="w-full">
      <Input 
        value={props.value}
        onChange={  e => props.bindFunction(e.target.value)}
        placeholder={props.placeholder}
        required={props.required}
        disabled={props.disabled}
        type={props.type}
    
      />
    </div>
    <div className="w-full text-xs text-danger-700 px-2 ">
      {props.labelMessageError}
    </div>
    <div>
   

</div>

  </div>

  )
}
