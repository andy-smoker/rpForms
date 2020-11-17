import React from 'react'

export const BondsRow = (props) => {
    let value = props.actions({ page: "statData", list: "stats", tag: props.values.parent, state: props.state })
    return (
        <div className={props.style.main}>
            <div className={`${props.formStyle.cell}`} >
                <input value={props.values.value} type='text' name={'bond' + props.serial} onInput={e => props.dispatcher({
                    state: props.state,
                    actions: props.actions,
                    dispatcher: props.dispatcher,
                    list: "bond_change",
                    tag: props.serial,
                    value: e.target.value
                })} />
            </div>
            <div className={`${props.formStyle.cell}`} >
                <p > {value.count} </p>
            </div>
        </div>
    )
}