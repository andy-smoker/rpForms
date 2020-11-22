import React from 'react'
import style from './index.module.css'
import fStyle from '../index.module.css'
import { Stat } from './Stat'
import { Attr } from './Attr'

export const StatData = (props) => {
    return (
        (<div className={`${style.statdata} ${fStyle.stat}`}>
            <Stat formStyle={props.style} style={style} state={props.state} getter={props.getter} 
            dispatcher={props.dispatcher} />
             <Attr formStyle={props.style} style={style} state={props.state} getter={props.getter} 
            dispatcher={props.dispatcher} /> 
        </div>)
    )
}