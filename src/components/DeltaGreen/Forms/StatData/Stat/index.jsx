import React, { useState } from 'react'
import style from './index.module.css'
import sdStyle from '../index.module.css'
import fStyle from '../../index.module.css'
import { StatRow } from './StatRow'

export const Stat = (props) => {
    debugger
    let rows = props.actions({page:"statData", list:"stats", state: props.state })
    return (    
        <div className={sdStyle.stat}>
            <div className={style.stat_row}>
                <div className={`${style.cell} ${fStyle.cell}`}> ПРАМЕТР </div>
                <div className={`${style.cell} ${fStyle.cell}`}> ЗНАЧ. </div>
                <div className={`${style.cell} ${fStyle.cell}`}> x5=% </div>
                <div className={`${style.dis} ${fStyle.cell}`}> ОСОБЕННОСТЬ </div>
            </div>
            {rows.map(row => {
                return (
                    <StatRow  formStyle={props.formStyle} areaStyle={props.style} style={style} 
                    values={row} state={props.state} actions={props.actions} dispatcher={props.dispatcher}/>
                )
            })}
        </div>
    )
}