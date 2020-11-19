import React from 'react'
import style from './index.module.css'

export const Title = (props) => {
    return (
        <div className={`${props.style} ${style[props.subStyle]}`}>
            <p>{props.text}</p>
        </div>
    )
}