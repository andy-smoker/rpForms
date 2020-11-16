import React from 'react'
import { Route } from 'react-router-dom'
import { DGgeneral } from '../DeltaGreen'

const Content = (props) => {
    //debugger
    return (
        <div>
            <Route exact path='/general' />
            <Route path='/dg' render={() => <DGgeneral state={props.state} 
            actions={props.actions} dispatcher={props.dispatcher}/>} />
        </div>
    )
}

export default Content