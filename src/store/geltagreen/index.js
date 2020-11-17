
function getElemet(props) {
    debugger
    const state = props.state.getState()
    let tmp
    let ret
    switch (props.page) {
        case "perData":
            tmp = state.deltagreen.form[props.page]
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
            tmp = state.deltagreen.form[props.page][props.list]
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
        default:
            return 0
    }
}

export default getElemet