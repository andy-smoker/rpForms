import React from 'react'
import style from './index.module.css'

export const Motiv = (props) => {
    return (

            <div className={props.style}>
                <div className={`${props.formStyle.cell} ${style.title}`} >
                    <p>МОТИВАЦИЯ И ПСИХИЧЕСКИЕ РАССТРОЙТВА</p>
                </div>
                <div className={`${props.formStyle.cell} ${style.cell}`}>
                    <textarea onInput={e => {
                        props.dispatcher.psy({
                            state: props.state,
                            dispatcher: props.dispatcher,
                            actions: props.actions,
                            list: "motiv",
                            value: e.target.value
                        })
                    }} />
                </div>
            </div>

    )
}