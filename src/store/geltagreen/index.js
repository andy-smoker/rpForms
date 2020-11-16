
function getElemet(props) {
    debugger
    const state = props.state.getState()
    let tmp
    switch (props.page) {
        case "perData": 
                let ret
                tmp = state.deltagreen.form[props.page]
                if (props.tag === undefined){
                    return tmp
                }
                tmp.map(e => {
                    if (e.tag === props.tag){
                        return ret = e
                    }
                    return
                })
                return ret
            
        case "statData":
            if (props.list == "stats"){
                tmp = state.deltagreen.form[props.page][props.list]
                let ret
                if (props.tag == undefined){
                    return tmp
                }
                tmp.map(e => {
                    debugger
                    if (e.tag === props.tag){
                        return ret=e
                    }
                    return
                })
                return ret
            } 
            
        default:
            return 0
    }
}

export default getElemet