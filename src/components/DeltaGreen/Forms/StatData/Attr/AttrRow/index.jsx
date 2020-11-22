import React from 'react'

const AttrRow = (props) => {
    /*
    let max = MAX({
        tag: props.attrib.tag,
        value: props.getter.attribTag(props.state, props.attrib.tag)
    })
    
    props.dispatcher.stat({
        state: props.state,
        actions: props.actions,
        dispatcher: props.dispatcher,
        list: "attrib",
        tag: props.values.tag,
        value: max
    })*/
    
    console.log(props.attrib)
    return (
        <div className={props.style.attr_row}>
            <div className={` ${props.formStyle.cell}`}> 
                <p>{props.attrib.title}</p> 
            </div>
            <div className={` ${props.formStyle.cell}`}> 
                <p name={'max'+props.attrib.tag} > {props.attrib.value} </p> 
            </div>
            <div className={`${props.formStyle.cell}`}> 
                {/* <input type='text'name={'curr'+props.values.tag}/>  */}
            </div>
        </div>
    )
}

const MAX = (props) => {
    switch (props.tag) {
        case "san": return props.value * 5
        case "bp": return props.value * 5 - props.value
        default: return props.value
    }
}

export default AttrRow