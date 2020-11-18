import React from 'react'
import style from './index.module.css'

export const Motiv = (props) => {
    return (
        <div>
            <div className={style.main}>
                <div className={props.style.cell}>
                    <p>МОТИВАЦИЯ И ПСИХИЧЕСКИЕ РАССТРОЙТВА</p>
                </div>
                <div className={`${props.style.cell} ${style.cell}`}>
                    <textarea onInput={e => {
                        props.dispatcher({
                            state: props.state,
                            dispatcher: props.dispatcher,
                            actions: props.actions,
                            value: e.target.value
                        })
                    }} />
                </div>
            </div>
        </div>
    )
}