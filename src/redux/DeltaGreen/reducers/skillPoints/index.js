import actions from '../../actions'

export const points = (s, a) => {
    switch (a.type) {
        case actions.SKILL_POINTS:
            if (a.max >= 0) {
                s.current = s.current - a.value
            }
            if (s.current < 0) {
                s.current = 0
            }
            break
        default: break
    }
    return s

}