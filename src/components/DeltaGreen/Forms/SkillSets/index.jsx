import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import { SkillRow } from './SkillRow'



export const SkillSets = (props) => {
    let rows = props.actions({page:"skills", state:props.state})
    return (
        <div className={`${props.style.skill} ${style.main}`}>
            <div className={`${style.row} ${props.style.cell}`}> 
                {props.actions({page:"skillsPoints", state:props.state}).current}
            </div>
            { rows.map(row => {
                return (
                    <SkillRow style={style} formStyle={props.style} state={props.state} actions={props.actions} 
                    dispatcher={props.dispatcher} skill={row}/>
                )
            })}
            <dev>
                <dev className={`${style.row} ${props.style.cell}`} >
                    <p> Языки и другие навыки </p>
                </dev>
                {/* <SkillRow name={<input type='text' />} /> */}
            </dev>
        </div>
    )
}
