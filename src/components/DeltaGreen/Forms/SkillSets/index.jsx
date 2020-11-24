import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import Other from './OtherRow'
import { SkillRow } from './SkillRow'

export const SkillSets = (props) => {
    return (
        <div className={`${props.style.skills} ${style.main}`}>
            <div className={style.rows}>
                {(props.getter.All(props.state)).map(row => {
                    return (
                        <SkillRow formStyle={props.style} state={props.state} getter={props.getter}
                            dispatcher={props.dispatcher} skill={row} />
                    )
                })} 
            </div>
            <div className={`${style.other}`} >
                <div className={`${style.row} ${props.style.cell}`} >
                    <p> Языки и другие навыки </p>
                    <div>
                    <button onClick={() => props.dispatcher.addOther(props.state)}> + </button>
                    <button onClick={() => props.dispatcher.delOther(props.state)}> - </button>
                    </div>
                </div>
                {(props.getter.otherSkills(props.state)).map(row => {
                    console.log(row)
                    return (
                        <Other formStyle={props.style} state={props.state} getter={props.getter}
                            dispatcher={props.dispatcher} skill={row} />
                    )
                })} 
            </div>
            
        </div>
    )
}
