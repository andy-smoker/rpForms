import React from 'react'
import style from './../index.module.css'
import fStyle from '../../../index.module.css'

const AttrRow = (props) => {
    let value = props.actions({page:"statData", list:"stats", tag:props.values.parent, state: props.state })
    debugger
    return (
        <div className={props.style.attr_row}>
            <div className={` ${props.formStyle.cell}`}> 
                <p>{props.values.title}</p> 
            </div>
            <div className={` ${props.formStyle.cell}`}> 
                <p name={'max'+props.values.tag} > {MAX({
                    tag: props.values.tag,
                    value: value.count
                })} </p> 
            </div>
            <div className={`${props.formStyle.cell}`}> 
                <input type='text'name={'curr'+props.values.tag}/> 
            </div>
        </div>
    )
}

const MAX = (props) => {
    switch (props.tag) {
        case "san": return props.value * 5
        case "bp": return props.value*5 - props.value
        default: return props.value
    }
}

export default AttrRow