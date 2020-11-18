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
            <Title text='ПЕРСОНАЛЬНЫЕ ДАННЫЕ' style={style.title} />
            <PerData style={style} state={props.state} actions={props.actions} dispatcher={props.dispatcher} />
            <Title text='СТАТИСТИЧЕСКАЯ ИНФОРМАЦИЯ' style={style.title} />
            <StatData style={style} state={props.state} actions={props.actions} dispatcher={props.dispatcher}/>
            <Title text='ПСИХОЛОГИЧЕСКАЯ ИНФОРМАЦИЯ' style={style.title}/>
            <PsyData  style={style} state={props.state} actions={props.actions} dispatcher={props.dispatcher}/>
             
            <Title text='НАБОР НАВЫКОВ' />
            <SkillSets style={style} state={props.state} actions={props.actions} dispatcher={props.dispatcher}/>
            <button className={style.down}>
                Save
            </button>
            <button className={style.down}>
                Dowload
            </button>
        </div>
    )
}

