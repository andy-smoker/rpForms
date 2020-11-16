import React from 'react'
import style from './../index.module.css'
import fStyle from '../../../index.module.css'

const AttrRow = (prop) => {
    return (
        <div className={style.attr_row}>
            <div className={` ${fStyle.cell}`}> <p>{prop.name}</p> </div>
            <div className={` ${fStyle.cell}`}> <p name={'max'+prop.tag} > {prop.value} </p> </div>
            <div className={`${fStyle.cell}`}> <input type='text'name={'curr'+prop.tag}/> </div>
        </div>
    )
}

export default AttrRow