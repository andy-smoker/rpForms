import React, { useState } from 'react'
import style from './index.module.css'
import d from '../../../../../../dispatch/geltagreen'

export const StatRow = (props) => {
    debugger
    return (

        <div className={props.style.stat_row}>
            <div className={`${style.cell} ${props.formStyle.cell}`}> <p>{props.stat.view}</p> </div>
            {/* <div className={`${props.style.score} ${props.formStyle.cell}`}> <input type="number" min='0' name={stat.tag} onChange={e => { setPercent(e.target.value) }} /></div> */}
            <div className={`${style.score} ${props.formStyle.cell}`}>
                {props.stat.count}
                <button className={style.btn} onClick={() => {
                    return props.stat.count < 20 ? 
                    props.dispatcher.changeScore(props.state, props.stat.tag, props.stat.count + 1): null
                }}> + </button>
                <button className={style.btn} onClick={() => {
                    return props.stat.count > 0 ? 
                    props.dispatcher.changeScore(props.state, props.stat.tag, props.stat.count - 1): null
                }} > - </button>
            </div>
            <div className={`${style.cell} ${props.formStyle.cell}`}>  {props.stat.count * 5}%  </div>
            <div className={`${style.dis} ${props.formStyle.cell}`}>  <input type='text'
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