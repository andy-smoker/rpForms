import React from 'react'
import {  NavLink, Route } from 'react-router-dom'
import { Form } from './Forms'
import About from './About'
import style from './index.module.css'

export const DGgeneral = (props) => {
    debugger
    const prefix = "dg"
    return (
        <div className={style.mane}>
            <div className={style.nav}>
                <NavLink className={style.nav_btn} to={`/${prefix}`}>
                    <button> About </button>
                </NavLink>
                <NavLink to={`/${prefix}/form`}>
                    <button> AddForm </button>
                </NavLink>
                <NavLink to={`/${prefix}/list`}>
                    <button> LIST </button>
                </NavLink>
            </div>
            <Route path={`/${prefix}/form`} render={() => <Form state={props.state} 
            getter={props.getter} dispatcher={props.dispatcher}/>} />
            <Route path={`/${prefix}/about`} component={About} />
        </div>
    )
}