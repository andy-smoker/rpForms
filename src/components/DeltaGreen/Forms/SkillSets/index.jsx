import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import { SkillRow } from './SkillRow'



export const SkillSets = (props) => {
    let rows = props.actions({page:"skills", state:props.state})
    return (
        <div className={`${props.style.skills} ${style.main}`}>
            <div>
            { rows.map(row => {
                return (
                    <SkillRow  formStyle={props.style} state={props.state} actions={props.actions} 
                    dispatcher={props.dispatcher} skill={row}/>
                )
            })}
            </div>
            <div className={`${style.other}`} >
                <dev className={`${style.row} ${props.style.cell}`} >
                    <p> Языки и другие навыки </p>
                </dev>
                {/* <SkillRow name={<input type='text' />} /> */}
            
            </div>
        </div>
    )
}
