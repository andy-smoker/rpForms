export const skills = (s, a, actions) => {
    console.log(s)
    switch (a.type){
        case actions.CHANGE_MOD:
            (s.skills).some(e =>{
                if (e.tag == a.tag){
                    if  (e.mod == 0 && a.value < 0 || e.mod == 4 && a.value > 0  ){
                        return
                    }
                    if (s.points.current > 0){
                        return e.mod = e.mod + a.value
                    }
                    return
                }
                return
            })
            break
        case actions.CHANGE_CON:
            (s.skills).some(e => {return e.tag == a.tag ? e.con = a.value : null})
            
        default: break
    }
    return s.skills
  
}