import action from '../../actions/PsyData'

export const psyData = (s, a) => {
    let tmp
    debugger
    switch (a.type) {
        case action.CHANGE_BOND:
            (s.bonds).map(e => {
                if (e.tag === a.tag) {
                    debugger
                    e.value = a.value
                }
            })
            break
        case action.ADD_BOND:
            (s.bonds).push(
                {tag:(s.bonds).length, value: "", score: 0, parent:"cha"}
            )
                break
        case action.DELETE_BOND :
            (s.bonds).pop()
            break
    }
    return s
}
