import React, { useState } from 'react'
import d from '../../../../../../dispatch/geltagreen'

export const StatRow = (props) => {
    debugger
    return (

        <div className={props.style.stat_row}>
            <div className={`${props.style.cell} ${props.formStyle.cell}`}> <p>{props.values.view}</p> </div>
            {/* <div className={`${props.style.score} ${props.formStyle.cell}`}> <input type="number" min='0' name={stat.tag} onChange={e => { setPercent(e.target.value) }} /></div> */}
            <div className={`${props.style.score} ${props.formStyle.cell}`}>
                {props.values.count}
                <button onClick={() => {
                    if (props.values.count < 20) {
                        props.dispatcher.stat({
                            state: props.state,
                            actions: props.actions,
                            dispatcher: props.dispatcher,
                            list: "score",
                            tag: props.values.tag,
                            value: props.values.count + 1
                        })
                    }
                }}> + </button>
                <button onClick={() => {
                    if (props.values.count > 0) {
                        props.dispatcher.stat({
                            state: props.state,
                            actions: props.actions,
                            dispatcher: props.dispatcher,
                            list: "score",
                            tag: props.values.tag,
                            value: props.values.count - 1
                        })
                    }
                }}> - </button>
            </div>
            <div className={`${props.style.cell} ${props.formStyle.cell}`}>  {props.values.count * 5}%  </div>
            <div className={`${props.style.dis} ${props.formStyle.cell}`}>  <input type='text'
                onInput={e => props.dispatcher.stat({
                    state: props.state,
                    actions: props.actions,
                    dispatcher: props.dispatcher,
                    list: "dist",
                    tag: props.values.tag,
                    value: e.target.value
                })} />
            </div>
        </div>
    )

}