import React from 'react'
import style from './index.module.css'
import { Bonds } from './Bonds'
import { Flaws } from './Flaws'
import { Motiv } from './Motiv'

export const PsyData = (props) => {
    return (
        
        <div className={`${props.style.psy} ${style.main}`}>
            <Bonds formStyle={props.style} style={style} state={props.state} actions={props.actions} dispatcher={props.dispatcher}/>
            <Motiv formStyle={props.style} style={props.style} state={props.state} actions={props.actions} dispatcher={props.dispatcher}/>
            <Flaws />
        </div>
    )
}