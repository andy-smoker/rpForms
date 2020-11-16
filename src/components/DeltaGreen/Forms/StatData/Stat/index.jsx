import React, { useState } from 'react'
import style from './index.module.css'
import sdStyle from '../index.module.css'
import fStyle from '../../index.module.css'
import { StatRow } from './StatRow'

export const Stat = (props) => {
    debugger
    let stats = props.actions({
        d:"statData",
        l:"stats",
        s:props.s
    }, null, props.state)
    debugger
    return (    
        <div className={sdStyle.stat}>
            <div className={style.stat_row}>
                <div className={`${style.cell} ${fStyle.cell}`}> STATISTIC </div>
                <div className={`${style.cell} ${fStyle.cell}`}> SCORE </div>
                <div className={`${style.cell} ${fStyle.cell}`}> x5=% </div>
                <div className={`${style.dis} ${fStyle.cell}`}> DISTINGTING DEATURE </div>
            </div>
            {stats.map((stat) => {
                return (
                    <StatRow  actions={props.actions} state={props.state} stat={stat} dispatch={props.dispatch}/>
                )
            })}
        </div>
    )
}