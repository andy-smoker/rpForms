import React, {useState } from 'react'
import style from './index.module.css'
import sdStyle from '../index.module.css'
import fStyle from '../../index.module.css'

export const Stat = () => {

    return (
        <div className={sdStyle.stat}>
            <div className={style.stat_row}>
                <div className={`${style.cell} ${fStyle.cell}`}> STATISTIC </div>
                <div className={`${style.cell} ${fStyle.cell}`}> SCORE </div>
                <div className={`${style.cell} ${fStyle.cell}`}> x5=% </div>
                <div className={`${style.dis} ${fStyle.cell}`}> DISTINGTING DEATURE </div>
            </div>
            <StatRow name='Сила(STR)' tag='str' />
            <StatRow name='Тело(CON)' tag='con' />
            <StatRow name='Ловкость(DEX)' tag='dex' />
            <StatRow name='Интеллект (INT)' tag='int' />
            <StatRow name='Воля (POW)' tag='pow' />
            <StatRow name='Харизма (CHA)' tag='cha' />
        </div>
    )
}

const StatRow = (prop) => {
    const [percent, setPercent] = useState(0)

    return (
        <div className={style.stat_row}>
            <div className={`${style.cell} ${fStyle.cell}`}> <p>{prop.name}</p> </div>
            <div className={`${style.score} ${fStyle.cell}`}> <input type="number" min='0' name={prop.tag} onChange={e => { setPercent(e.target.value) }} /></div>
            <div className={`${style.cell} ${fStyle.cell}`}>  {percent * 5}%  </div>
            <div className={`${style.dis} ${fStyle.cell}`}>  <input type='text' name={'dis_' + prop.tag} /> </div>
        </div>
    )
}