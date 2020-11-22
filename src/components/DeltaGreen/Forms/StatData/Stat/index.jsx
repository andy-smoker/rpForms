import React, { useState } from 'react'
import style from './index.module.css'
import sdStyle from '../index.module.css'
import fStyle from '../../index.module.css'
import { StatRow } from './StatRow'

export const Stat = (props) => {
    return (    
        <div className={sdStyle.stat}>
            <div className={style.stat_row}>
                <div className={`${style.cell} ${fStyle.cell}`}> ПРАМЕТР </div>
                <div className={`${style.cell} ${fStyle.cell}`}> ЗНАЧ. </div>
                <div className={`${style.cell} ${fStyle.cell}`}> x5=% </div>
                <div className={`${style.dis} ${fStyle.cell}`}> ОСОБЕННОСТЬ </div>
            </div>
            {(props.getter.allStats(props.state)).map(row => {
                return (
                    <StatRow  formStyle={props.formStyle} areaStyle={props.style} style={style} 
                    stat={row} state={props.state} actions={props.actions} dispatcher={props.dispatcher}/>
                )
            })}
        </div>
    )
}