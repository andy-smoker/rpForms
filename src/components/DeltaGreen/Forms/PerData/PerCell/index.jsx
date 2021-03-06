import React from 'react'
import style from './index.module.css'

export const PerCell = (props) => {
    debugger
    return (
        <div className={`${props.formStyle.cell} ${props.style[props.values.tag]}`}>
            <div className={style.title}> {props.values.title} </div>
            <Input state={props.state} dispatcher={props.dispatcher} actions={props.actions}
            values={props.values} style={props.style} />
        </div>
    )
}

const Input = (props) => {
    debugger
    switch (props.values.type) {
        case "text" :
            return <input type={props.values.type} name={props.values.tag} value={props.values.value}
            onInput={e => {
                debugger
                props.dispatcher.change(props.state, props.values.tag, e.target.value)}}/>
        case "radio":
            return (props.values.value).map(e => {
                return (
                    <div className={style.inputn}>
                        {e.title}
                        <input type={props.values.type} name={props.values.tag} value={e.value} checked={e.check} 
                        onClick={() => props.dispatcher.change(props.state, props.values.tag, e.value)} />
                    </div>
                )
            })
        case "textarea":
            return <textarea name={props.values.tag} value={props.values.value} 
            onInput={e => props.dispatcher.change(props.state, props.values.tag, e.target.value)}/>
        default:
            return 0

    }
}