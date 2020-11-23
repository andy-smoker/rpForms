
const points = (s, a, action) => {
    debugger
    switch (a.type) {
        case action:
            s.points.current = s.points.max;
            (s.skills).map(e => {
                debugger
                return e.choosed == true ? s.points.current = s.points.current - 1 : null
            })
            break
        default: break
    }
    return s.points
}
export default points