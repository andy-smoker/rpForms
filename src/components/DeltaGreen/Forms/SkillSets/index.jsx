import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import { SkillRow } from './SkillRow'

export const SkillSets = (props) => {
    return (
        <div className={`${props.style.skills} ${style.main}`}>
            <div className={style.rows}>
                {(props.getter.All(props.state)).map(row => {
                    console.log(row)
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
                        <button> + </button>
                        <button> - </button>
                    </div>
                </div>
                <div className={`${style.row} ${props.style.cell}`} >
                    <div className={`${style.cell} ${props.style.cell}`}>
                        <input type="text" />
                        <input type='checkbox' />
                    </div>
                    <div className={`${style.cell} ${props.style.cell}`}>
                        <p> 0 </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}
