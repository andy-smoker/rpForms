import per from './per'

function getElemet(props) {
    debugger
    const state = props.state.getState()
    let tmp = state.deltagreen.form[props.page]
    let ret
    switch (props.page) {
       

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
        case "list":
            return state.deltagreen.concept
        case "additions":
            tmp = state.deltagreen.concept
            let concept
            (tmp.list).map(e => {
                if (e.choose == true) {
                    concept = e.value
                }
            })
            return tmp.concepts[concept].additionslSkills
        default:
            return 0
    }
}

export const Concepts = (props) => {
    debugger
    const state = props.state.getState()
    let tmp = state.deltagreen.concept
    switch (props.list) {
       case "list":
           (tmp[props.list]).map(e =>{
               if (e.choose == true){
                   return e.value
               }
           })
        case "addtions":
            return tmp.concept[
                (tmp.list).map(e =>{
                    if (e.choose == true){
                        return e.value
                    }
                })
            ].additionslSkills
    
        default:
            return 0
    }
}



export default {
    getElemet,
    per
}