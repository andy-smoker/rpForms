import React from 'react'
import style from './index.module.css'
import fStyle from '../index.module.css'
import {PerCell} from './PerCell'

export const PerData = (props) => {
    return (
        <div className={`${style.per_data} ${props.style.per}`}>
            {(props.getter.per.All(props.state)).map(e => {
                return <PerCell formStyle={props.style} style={style} values={e} 
                state={props.state} getter={props.getter} dispatcher={props.dispatcher} />
            })}
            <div className={`${style.concept} ${props.style.cell}`}>
                Типаж: <select onChange={e =>{
                    debugger
                    props.dispatcher.chooseConcept(props.state, e.target.value)}}>
                    {(props.getter.concept.List(props.state)).map(e => {
                        return <option value={e.value}> {e.title}</option>
                    })}

                </select>
            </div>
        </div>
    )
}