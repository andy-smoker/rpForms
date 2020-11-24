import React from 'react'
import { PerData } from './PerData'
import style from './index.module.css'
import {Title} from './Title'
import { StatData } from './StatData'
import { PsyData } from './PsyData'
import { SkillSets } from './SkillSets'

export const Form = (props) => {
    debugger;
    return (
        <div className={style.chsh}>
            <Title text='ПЕРСОНАЛЬНЫЕ ДАННЫЕ' style={style.title} subStyle="per"/>
            <PerData style={style} state={props.state} getter={props.getter} dispatcher={props.dispatcher.per} />
            <Title text='ПСИХОЛОГИЧЕСКАЯ ИНФОРМАЦИЯ' style={style.title} subStyle="psy"/>
            <PsyData  style={style} state={props.state} getter={props.getter.psy} dispatcher={props.dispatcher.psy}/>
            
            <Title text='СТАТИСТИЧЕСКАЯ ИНФОРМАЦИЯ' style={style.title} subStyle="stat"/>
            <StatData style={style} state={props.state} getter={props.getter.stat} dispatcher={props.dispatcher.stat}/>
            <Title text='НАБОР НАВЫКОВ' style={style.title} subStyle="skills"/>
            
            <div className={`${style.cell} ${style.skillPoints}`}> 
                Очки навыков: {props.getter.skills.getPoints(props.state).current}
            </div>
            <div className={`${style.cell} ${style.additionPoints}`}> 
                Очки дополнительных навыков: {props.getter.skills.AdditionsPoints(props.state).current}
            </div>
            <SkillSets style={style} state={props.state} getter={props.getter.skills} dispatcher={props.dispatcher.skills}/>
            
            <div>
            <button className={style.down} onClick={() =>{
                debugger;
                
            }}>
                Save
            </button>
            <button className={style.down}>
                Dowload
            </button>
            </div>
        </div>
    )
}

