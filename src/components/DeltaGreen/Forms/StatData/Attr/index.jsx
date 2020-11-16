import React from 'react'
import style from './index.module.css'
import sdStyle from '../index.module.css'
import fStyle from '../../index.module.css'
import AttrRow from './AttrRow'

export const Attr = (props) => {
    return (
        <div className={sdStyle.attr}>
            <div className={style.attr_row}>
                <div className={`${style.cell} ${fStyle.cell}`} > DEVIDED ATTRIBUTES</div>
                <div className={`${style.cell} ${fStyle.cell}`} > MAXIMUM </div>
                <div className={`${style.cell} ${fStyle.cell}`} > CURRENT </div>
            </div>
            < AttrRow name='ЖИЗНЬ (HP)' v={parseInt(props.val.hp)}/>
            < AttrRow name='СИЛА ВОЛИ (WP)' v={parseInt(props.val.wp)}/>
            < AttrRow name='РАССУДОК (SAN)' v={parseInt(props.val.san)*5}/>
            < AttrRow name='ТОЧКА СЛОВМА (BP)' v={(parseInt(props.val.bp)*5)-(parseInt(props.val.pow))}/>
        </div>
    )
}


