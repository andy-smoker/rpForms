
import action from '../../actions/PerData'

export const perData = (s, a) => {
    debugger
    switch (a.type) {
        case action.CHANGE_PER:
            s.map(e => {
                debugger
                if (e.tag === a.tag) {
                    if (Array.isArray(e.value)){
                        
                        let arr = e.value
                        arr.map(el => {
                            debugger
                            if (el.value === a.value){
                                el.check = true
                            } else {
                                el.check = false
                            }
                        })
                    }else{
                    e.value = a.value
                    }
                }
            })
            return s
        case action.GET_PER:
            return get(a.tag)
        default:
            return s
    }

    function get(tag) {
        return s.map(e => {
            if (e.tag === tag) {
                return e.count
            }
        })
    }
}
