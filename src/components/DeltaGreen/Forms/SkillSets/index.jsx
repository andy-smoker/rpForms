import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import fStyle from '../index.module.css'
import { SkillRow } from './SkillRow'



export const SkillSets = (props) => {
    return (
        <div className={`${fStyle.skill} ${style.main}`}>
            { props.skills.map(s => {
                return (
                    <SkillRow skill={s} points={props.points}/>
                )
            })}
            <dev>
                <dev className={`${style.row} ${fStyle.cell}`} >
                    <p> Языки и другие навыки </p>
                </dev>
                {props.points}
                {/* <SkillRow name={<input type='text' />} /> */}
            </dev>
        </div>
    )
}
