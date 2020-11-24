import React from 'react'
import style from './index.module.css'

export const SkillRow = (props) => {
    let addition
    
    return (
        <dev className={style.skill} >
            <dev className={`${props.formStyle.cell} ${style.cell}`}>
                <p>{props.skill.name}</p>
                <input type='checkbox' disabled={
                    (props.getter.Additions(props.state)).some(e => {
                        return e.tag == props.skill.tag ? addition =
                            { con: e.con, default: e.default } : false}) 
                            && props.getter.AdditionsPoints(props.state).current != 0
                        ? false : !props.getter.withTag(props.state, props.skill.tag).choosed}
                    //value={props.getter.withTag(props.state, props.skill.tag).choosed}
                    name={props.skill.tag} onClick={e => {
                        props.dispatcher.checkAddition(props.state, props.skill.tag,
                            e.target.checked ? addition.con : 
                            addition.default, e.target.checked)
                    }}
                    checked={props.getter.withTag(props.state, props.skill.tag).choosed}
                    />
                <div>
                    <button onClick={() => {
                        props.dispatcher.changeMod(props.state, props.skill.tag, 1, props.skill.mod + 1)
                    }}> + </button>

                    <button onClick={() => {
                        props.dispatcher.changeMod(props.state, props.skill.tag, -1, props.skill.mod - 1)
                    }}> - </button>
                </div>
            </dev>
            <dev className={`${props.formStyle.cell}`}>
                <p>{UpdateCon(props.getter.withTag(props.state, props.skill.tag).con, props.skill.mod)}</p>
            </dev>
        </dev>)

}

const UpdateCon = (con, mod) => {
    con = con + mod * 20
    if (con > 80) {
        return 80
    } else if (con < 0) {
        return 0
    } else {
        return con
    }
}