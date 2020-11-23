import React from 'react'
import style from './index.module.css'

export const Motiv = (props) => {
    // добавтить вызов значения из состояния
    return (
            <div className={props.style}>
                <div className={`${props.formStyle.cell} ${style.title}`} >
                    <p>МОТИВАЦИЯ И ПСИХИЧЕСКИЕ РАССТРОЙТВА</p>
                </div>
                <div className={`${props.formStyle.cell} ${style.cell}`}>
                    <textarea value={props.getter(props.state)}  onInput={e => {
                        props.dispatcher.enterMotiv(props.state, e.target.value)}} />
                </div>
            </div>

    )
}