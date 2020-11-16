import React from 'react'
import style from './index.module.css'
import fStyle from '../index.module.css'
import {PerCell} from './PerCell'

export const PerData = (props) => {
    debugger
    let rows = props.actions({page:"perData", state: props.state })
    return (
        <div className={`${style.per_data} ${props.style.per}`}>
            {rows.map(e => {
                return <PerCell formStyle={props.style} style={style} values={e} state={props.state} actions={props.actions} dispatcher={props.dispatcher} />
            })}
        </div>
    )
}