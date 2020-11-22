import React from 'react'
import { Route } from 'react-router-dom'
import { DGgeneral } from '../DeltaGreen'

const Content = (props) => {
    debugger
    return (
        <div>
            <Route exact path='/general' />
            <Route path='/dg' render={() => <DGgeneral state={props.state} 
            getter={props.getter.delta} dispatcher={props.dispatcher.delta}/>} />
        </div>
    )
}

export default Content