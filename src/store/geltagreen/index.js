
function getElemet(props) {
    debugger
    const state = props.state.getState()
    let tmp = state.deltagreen.form[props.page]
    let ret
    switch (props.page) {
        case "perData":
            if (props.tag === undefined) {
                return tmp
            }
            tmp.map(e => {
                if (e.tag === props.tag) {
                    return ret = e
                }
                return
            })
            return ret

        case "statData":
            if (props.list == undefined){
                break
            }
            tmp = tmp[props.list]
            if (props.tag === undefined) {
                return tmp
            } else {
                tmp.map(e => {
                    if (e.tag === props.tag) {
                        ret = e
                    }
                    return
                })
                return ret
            }
        case "psyData":
            if (props.tag == undefined){
                break
            }
            tmp = tmp[props.tag]
            
            return tmp


        case "skills":
            if (props.tag == undefined) {
                return tmp
            } else {
                tmp.map(e => {
                    if (e.tag == props.tag) {
                        return ret = e
                    }
                    return
                })
            }
            return ret
        case "skillsPoints":
            return tmp
        default:
            return 0
    }
}

export default getElemet