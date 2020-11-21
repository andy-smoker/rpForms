export const psyData = (s, a, actions) => {
    debugger
    switch (a.type) {
        case actions.CHANGE_BOND:
            (s.bonds).map(e => {
                if (e.tag === a.tag) {
                    debugger
                    e.value = a.value
                }
            })
            break
        case actions.ADD_BOND:
            (s.bonds).push(
                {tag:(s.bonds).length, value: "", score: 0, parent:"cha"}
            )
                break
        case actions.DELETE_BOND :
            (s.bonds).pop()
        case actions.CHANGE_MOTIV:
            s.bonds.motiv = a.value
            break
        default: break
    }
    return s
}
