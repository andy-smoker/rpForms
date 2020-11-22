import React from 'react'
import style from './index.module.css'
import { Bonds } from './Bonds'
import { Flaws } from './Flaws'
import { Motiv } from './Motiv'

export const PsyData = (props) => {
    return (
        
        <div className={`${props.style.psy} ${style.main}`}>
            <Bonds formStyle={props.style} style={style.bonds} 
            state={props.state} getter={props.getter} dispatcher={props.dispatcher}/>
            <Motiv formStyle={props.style} style={style.motiv} 
            state={props.state} getter={props.getter.Motiv} dispatcher={props.dispatcher}/>
            <Flaws formStyle={props.style} style={style.flaws}
            state={props.state} getter={props.getter.Flaws} dispatcher={props.dispatcher}/>
        </div>
    )
}