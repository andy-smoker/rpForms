import React from 'react'

export const Title = (props) => {
    return (
        <div className={props.style}>
            <p>{props.text}</p>
        </div>
    )
}