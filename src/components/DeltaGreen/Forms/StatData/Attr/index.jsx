import React from 'react'
import style from './index.module.css'
import sdStyle from '../index.module.css'
import fStyle from '../../index.module.css'

export const Attr = () => {
    return (
        <div className={sdStyle.attr}>
            <div className={style.attr_row}>
                <div className={`${style.cell} ${fStyle.cell}`} > DEVIDED ATTRIBUTES</div>
                <div className={`${style.cell} ${fStyle.cell}`} > MAXIMUM </div>
                <div className={`${style.cell} ${fStyle.cell}`} > CURRENT </div>
            </div>
            < AttrRow name='ЖИЗНЬ (HP)' />
            < AttrRow name='СИЛА ВОЛИ (WP)' />
            < AttrRow name='РАССУДОК (SAN)' />
            < AttrRow name='ТОЧКА СЛОВМА (BP)' />
        </div>
    )
}

const AttrRow = (prop) => {
    return (
        <div className={style.attr_row}>
            <div className={` ${fStyle.cell}`}> <p>{prop.name}</p> </div>
            <div className={` ${fStyle.cell}`}> <input type="number" name={'max'+prop.tag} /> </div>
            <div className={`${fStyle.cell}`}> <input type='text'name={'curr'+prop.tag}/> </div>
        </div>
    )
}
