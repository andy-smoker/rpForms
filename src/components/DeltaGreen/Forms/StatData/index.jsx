import React from 'react'
import style from './index.module.css'
import fStyle from '../index.module.css'
import { Stat } from './Stat'
import { Attr } from './Attr'

export const StatData = (props) => {

    return (
        (<div className={`${style.statdata} ${fStyle.stat}`}>
            <Stat formStyle={props.style} style={style} state={props.state} actions={props.actions} dispatcher={props.dispatcher}/>

            {/* <Attr val={props.value.attribs} /> */}
        </div>)
    )
}