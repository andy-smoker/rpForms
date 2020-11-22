import React, { useState } from 'react'
import style from './index.module.css'
import { BondsRow } from './BondsRow'

export const Bonds = (props) => {
    return (
        <div className={`${props.formStyle.cell} ${props.style}`}>
            <div className={style.row}>
                <div className={`${props.formStyle.cell} ${style.name}`} >
                    <p> СВЯЗИ </p>
                </div>
                <div className={`${props.formStyle.cell} ${style.score}`} >
                    <p> ОЧКИ </p>
                </div>
            </div>
            <div className={style.row}>
                <div className={`${props.formStyle.cell} ${style.add}`}>
                        <button onClick={() => props.dispatcher.addBond(props.state)}> + </button>
                        <button onClick={() => props.dispatcher.delBond(props.state)}> - </button>
                </div>
            </div >
                {(props.getter.Bonds(props.state)).map(row => {
                    return (
                        < BondsRow formStyle={props.formStyle} style={style} bond={row}
                        state={props.state} getter={props.getter} dispatcher={props.dispatcher} />
                    )})}
        </div>
    )
}