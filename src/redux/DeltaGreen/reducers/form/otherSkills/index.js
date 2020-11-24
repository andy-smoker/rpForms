const skills = (s, a, actions) => {
    console.log(s)
    switch (a.type){

        case actions.CHANGE_OTHER:
            (s.skills).some(e =>{
                return e.tag == a.tag ?
                    e.name = a.value : null
                
            })
            break
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
            break
        case actions.CHECK_ADDITION: 
            (s.skills).some(e => {return e.tag == a.tag ? e.choosed = a.value: null})
            break
        case actions.ADD_SKILL:
            (s.skills).push(
                { name:"",tag:`${(s.skills).length}`, con: 0, mod: 0, choosed: false}
            )
        break
        case actions.DEL_SKILL:
            (s.skills).pop()
        break
        default: break
    }
    return s.skills
}

export default skills