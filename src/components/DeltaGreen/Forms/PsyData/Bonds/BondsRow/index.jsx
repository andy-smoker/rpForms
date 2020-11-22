import React from 'react'

export const BondsRow = (props) => {
    return (
        <div className={props.style.row}>
            <div className={`${props.formStyle.cell}`} >
                <input value={props.bond.value} type='text' name={'bond' + props.bond.tag} 
                onInput={e => props.dispatcher.changeBond(props.state, props.bond.tag, e.target.value)} />
            </div>
            <div className={`${props.formStyle.cell}`} >
                <p > {props.getter.BondScore(props.state, props.bond.tag)} </p>
            </div>
        </div>
    )
}