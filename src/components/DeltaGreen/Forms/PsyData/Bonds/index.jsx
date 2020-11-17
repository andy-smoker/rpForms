import React, { useState } from 'react'
import style from './index.module.css'
import {BondsRow} from './BondsRow'

export const Bonds = (props) => {
    const [bonds, setBonds] = useState([
        { id: 0 }
    ])
    debugger
    let rows = props.actions({page:"psyData", tag:"bonds", state: props.state })
    return (
        <div className={props.formStyle.bonds}>
            <div className={style.main}>
                <div className={`${props.formStyle.cell}`} >
                    <p> СВЯЗИ </p>
                </div>
                <div className={`${props.formStyle.cell}`} >
                    <p> ОЧКИ </p>
                </div>
            </div>
            <div className={style.add}>
                <div className={`${props.formStyle.cell}`} >
                    <button onClick={() => props.dispatcher({
                    state: props.state,
                    actions: props.actions,
                    dispatcher: props.dispatcher,
                    list: "bond_add",
                })}> + </button>

                    <button onClick={() => props.dispatcher({
                    state: props.state,
                    actions: props.actions,
                    dispatcher: props.dispatcher,
                    list: "bond_del",
                })}> - </button>
                </div>
            </div>
            {rows.map((row, serial) => {
                return (
                    < BondsRow serial={serial} formStyle={props.formStyle} style={style} values={row} state={props.state}
                     actions={props.actions} dispatcher={props.dispatcher} />
                )
            })}


        </div>
    )
}