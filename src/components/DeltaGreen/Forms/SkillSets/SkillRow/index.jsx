import React, {useState} from 'react'
import style from '../index.module.css'
import fStyle from '../../index.module.css'

export const SkillRow = (props) => {
    const [val, setVal] = useState(0)
    let points = props.points
    let fart = props.skill.con + val * 20
    if (fart > 80) {
        fart = 80
    }

    return (
        <dev className={style.row} >
            <dev className={`${fStyle.cell} ${style.cell}`}>
                <p>{props.skill.name}</p>
                <div>
                    {val}
                    <button onClick={() => {
                        if (val < 4 && points > 0) { setVal(val + 1) }
                        points -= 1
                    }}> + </button>
                    <button onClick={() => {
                        if (val > 0) { setVal(val - 1) }
                        points += 1
                    }}> - </button>
                </div>
            </dev>
            <dev className={`${fStyle.cell}`}>
                <p>{fart}</p>
            </dev>
        </dev>)

}