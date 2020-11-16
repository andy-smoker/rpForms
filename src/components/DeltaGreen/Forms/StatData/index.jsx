import React from 'react'
import style from './index.module.css'
import fStyle from '../index.module.css'
import { Stat } from './Stat'
import { Attr } from './Attr'

export const StatData = (props) => {

    return (
        (<div className={`${style.statdata} ${fStyle.stat}`}>
            <Stat actions={props.actions} state={props.state} stats={props.value.stats} dispatch={props.dispatch}/>

            <Attr val={props.value.attribs} />

            <div className={`${style.look} ${fStyle.cell}`}>
                <p>Внешность</p>
                <textarea name={fStyle.title} />
            </div>
        </div>)
    )
}