import React from 'react'
import style from './index.module.css'
import fStyle from '../index.module.css'
import {PerCell} from './PerCell'

export const PerData = (props) => {
    let conList = props.actions({page:"list", state:props.state}).list

    debugger
    let rows = props.actions({page:"perData", state: props.state })
    return (
        <div className={`${style.per_data} ${props.style.per}`}>
            {rows.map(e => {
                return <PerCell formStyle={props.style} style={style} values={e} 
                state={props.state} actions={props.actions} dispatcher={props.dispatcher} />
            })}
            <div className={`${style.concept} ${props.style.cell}`}>
                Типаж: <select onChange={e =>{
                    props.dispatcher.concept({
                        state: props.state,
                        actions: props.actions,
                        dispatcher: props.dispatcher,
                        list: "choose",
                        tag: e.target.value,
                    })
                    }
                }>
                    {conList.map(e => {
                        return <option value={e.value}> {e.title}</option>
                    })}

                </select>
            </div>
        </div>
    )
}