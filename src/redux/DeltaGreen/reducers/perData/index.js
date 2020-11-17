
import action from '../../actions/PerData'

export const perData = (s, a) => {
    debugger
    switch (a.type) {
        case action.CHANGE_PER:
            s.map(e => {
                if (e.tag === a.tag) {
                    if (Array.isArray(e.value)){
                        
                        let arr = e.value
                        arr.map(el => {
                            if (el.value === a.value){
                                return el.check = true
                            } else {
                                return el.check = false
                            }
                            
                        })
                    }else{
                        return e.value = a.value
                    }
                }
                return
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
            return
        })
    }
}
