import React from 'react'
import style from './index.module.css'

export const SkillRow = (props) => {
    let additions = props.actions({ page: "additions", state: props.state })
    let addition
    return (
        <dev className={style.skill} >
            <dev className={`${props.formStyle.cell} ${style.cell}`}>
                <p>{props.skill.name}</p>
                <input type='checkbox' disabled={additions.some(e => { return e.tag == props.skill.tag ? addition = { con: e.con, default: e.default } : false }) ? false : true}
                    name={props.skill.tag} onClick={e => {
                        props.dispatcher.skill({
                            state: props.state,
                            dispatcher: props.dispatcher,
                            actions: props.actions,
                            list: "con",
                            tag: props.skill.tag,
                            value: e.target.checked ? addition.con : addition.default,
                        })
                        console.log(e.target.checked)
                    }} />
                <div>
                    <button onClick={() => {
                        props.dispatcher.skill({
                            state: props.state,
                            dispatcher: props.dispatcher,
                            actions: props.actions,
                            list: "mod",
                            tag: props.skill.tag,
                            value: 1,
                            max: props.skill.mod + 1
                        })
                    }}> + </button>
                    <button onClick={() => {
                        props.dispatcher.skill({
                            state: props.state,
                            dispatcher: props.dispatcher,
                            actions: props.actions,
                            list: "mod",
                            tag: props.skill.tag,
                            value: -1,
                            max: props.skill.mod - 1
                        })
                    }}> - </button>
                </div>
            </dev>
            <dev className={`${props.formStyle.cell}`}>
                <p>{UpdateCon(props.actions({ page: "skills", tag: props.skill.tag, state: props.state }).con, props.skill.mod)}</p>
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