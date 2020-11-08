import React from 'react'
import style from './index.module.css'
import fStyle from '../index.module.css'
import { Bonds } from './Bonds'
import { Flaws } from './Flaws'
import { Motiv } from './Motiv'

export const PsyData = (props) => {
    return (
        
        <div className={`${fStyle.psy} ${style.main}`}>
            <Bonds cha={props.cha}/>
            <Motiv />
            <Flaws />
        </div>
    )
}