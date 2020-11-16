import React, {useState} from 'react'
import style from './../index.module.css'
import fStyle from '../../../index.module.css'
import d from '../../../../../../dispatch/geltagreen'
import actions from '../../../../../../redux/DeltaGreen/actions'

export const StatRow = (props) => {
    debugger
    let stat = props.stat
    const [percent, setPercent] = useState(0)
    
    return (

<div className={style.stat_row}>
    <div className={`${style.cell} ${fStyle.cell}`}> <p>{stat.view}</p> </div>
            {/* <div className={`${style.score} ${fStyle.cell}`}> <input type="number" min='0' name={stat.tag} onChange={e => { setPercent(e.target.value) }} /></div> */}
            <div className={`${style.score} ${fStyle.cell}`}> 
            {
                props.actions({
                    d:"statData",
                    l:"stats",
                    s:props.s
                }, stat.tag, props.state).count
            }
            <button onClick={() =>  d({
                tag: stat.tag,
                list: "stat",
                state: props.state,
                dispatch: props.dispatch,
                actions: props.actions,
                value: stat.count + 1 
                })}> + </button>
            <button> - </button>
            </div>
            <div className={`${style.cell} ${fStyle.cell}`}>  {percent * 5}%  </div>
            <div className={`${style.dis} ${fStyle.cell}`}>  <input type='text' name={'dis_' + stat.tag} /> </div>
        </div>
    )

}