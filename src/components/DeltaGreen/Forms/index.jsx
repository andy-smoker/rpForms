import React from 'react'
import { PerData } from './PerData'
import style from './index.module.css'
import {Title} from './Title'
import { StatData } from './StatData'
import { PsyData } from './PsyData'
import { SkillSets } from './SkillSets'

export const Form = (props) => {
    //debugger;
    return (
        <div className={style.chsh}>
            <Title text='ПЕРСОНАЛЬНЫЕ ДАННЫЕ' style={style.title} subStyle="per"/>
            <PerData style={style} state={props.state} actions={props.actions} dispatcher={props.dispatcher} />
            <Title text='СТАТИСТИЧЕСКАЯ ИНФОРМАЦИЯ' style={style.title} subStyle="stat"/>
            <StatData style={style} state={props.state} actions={props.actions} dispatcher={props.dispatcher}/>
            <Title text='ПСИХОЛОГИЧЕСКАЯ ИНФОРМАЦИЯ' style={style.title} subStyle="psy"/>
            <PsyData  style={style} state={props.state} actions={props.actions} dispatcher={props.dispatcher}/>
            <div className={`${style.cell} ${style.points}`}> 
                Очки навыков: {props.actions({page:"skillsPoints", state:props.state}).current}
            </div>
            <Title text='НАБОР НАВЫКОВ' style={style.title} subStyle="skills"/>
            <SkillSets style={style} state={props.state} actions={props.actions} dispatcher={props.dispatcher}/>
            <div>
            <button className={style.down}>
                Save
            </button>
            <button className={style.down}>
                Dowload
            </button>
            </div>
        </div>
    )
}

