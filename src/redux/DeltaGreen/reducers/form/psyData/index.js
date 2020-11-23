export const psyData = (s, a, actions) => {
    debugger
    switch (a.type) {
        case actions.CHANGE_BOND:
            (s.bonds).some(e => {
                return e.tag == a.tag ? e.value = a.value : null
                
            })
            break
        case actions.CHANGE_BOND_SCORE:
            (s.bonds).map(e => {
               e.score = a.value
            })
            break
        case actions.ADD_BOND:
            (s.bonds).push(
                {tag:(s.bonds).length, value: "", 
                score: s.bonds[0] != undefined ? s.bonds[0].score : 0
                , parent:"cha"}
            )
                break
        case actions.DELETE_BOND :
            (s.bonds).pop()
        case actions.CHANGE_MOTIV:
            s.motiv.text = a.value
            break
        default: break
    }
    return s
}
