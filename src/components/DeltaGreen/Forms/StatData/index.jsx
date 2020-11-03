import React from 'react'
import style from './index.module.css'
import fStyle from '../index.module.css'
import { Stat } from './Stat'
import { Attr } from './Attr'

export const StatData = () => {

    
    return (
        <div className={`${style.statdata} ${fStyle.stat}`}>
            <Stat />
            <Attr />
            <div className={`${style.look} ${fStyle.cell}`}> 
            <p>Внешность</p>
            <textarea name={fStyle.title} />

            </div>
        </div>
    )
}




