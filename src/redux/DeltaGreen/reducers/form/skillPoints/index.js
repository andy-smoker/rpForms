export const points = (s, a, action) => {
    debugger
    switch (a.type) {
        case action:
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