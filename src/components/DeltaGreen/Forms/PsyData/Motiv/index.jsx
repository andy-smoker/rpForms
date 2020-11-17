import React from 'react'
import style from './index.module.css'
import fStyle from '../../index.module.css'

export const Motiv = (props) => {
    return (
        <div>
            <div className={style.main}>
                <div className={props.style.cell}>
                    <p>МОТИВАЦИЯ И ПСИХИЧЕСКИЕ РАССТРОЙТВА</p>
                </div>
                <div className={`${fStyle.cell} ${style.cell}`}>
                    <textarea />
                </div>
            </div>
        </div>
    )
}