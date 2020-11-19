import React from 'react'
import style from './index.module.css'
import fStyle from '../../index.module.css'

export const Flaws = (props) => {
    return (
        <div className={props.style}>
            <div className={`${props.formStyle.cell} ${style.title}`}>
                <p>13. ИНЦИДЕНТЫ ПОТЕРИ РАССУДКА БЕЗ БЕЗУМИЯ</p>
            </div>
            <div className={` ${props.formStyle.cell} ${style.cell}`}>
                <p>НАСИЛИЕ</p>
                <div>
                        <input type='checkbox' name='voilence' />
                        <input type='checkbox' name='voilence' />
                        <input type='checkbox' name='voilence' />
                    </div>
                
            </div>
            <div className={`${props.formStyle.cell} ${style.cell}`}>
                <p>БЕСПОМОЩНОСТЬ </p>
                    <div>
                        <input type='checkbox' name='helpness' />
                        <input type='checkbox' name='helpness' />
                        <input type='checkbox' name='helpness' />
                    </div>
            </div>
        </div>
    )
}