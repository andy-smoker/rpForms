import React, { useState } from 'react'
import style from './index.module.css'
import fStyle from '../../index.module.css'

export const Bonds = (props) => {
    const [bonds, setBonds] = useState([
        { id: 0 }
    ])

    return (
        <div className={fStyle.bonds}>
            <div className={style.main}>
                <div className={`${fStyle.cell}`} >
                    <p> СВЯЗИ </p>
                </div>
                <div className={`${fStyle.cell}`} >
                    <p> ОЧКИ </p>
                </div>
            </div>
            <div className={style.add}>
                <div className={`${fStyle.cell}`} >
                    <button onClick={e => {
                        setBonds([...bonds, { id: bonds.length }])
                    }}> + </button>

                    <button onClick={e => {
                        setBonds(bonds.slice(0, bonds.length - 1))
                    }}> - </button>
                </div>
            </div>
            {bonds.map(e => {
                return (
                    < BondsRow tag={e.id} score={props.cha} />
                )
            })}


        </div>
    )
}

const BondsRow = (props) => {
    return (
        <div className={style.main}>
            <div className={`${fStyle.cell}`} >
                <input type='text' name={'bond' + props.tag} />
            </div>
            <div className={`${fStyle.cell}`} >
                <p > {props.score} </p>
            </div>
        </div>
    )
}