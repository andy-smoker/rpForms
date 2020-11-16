function reducer(state, action) {
    switch(action.type) {
        case onChange: return { value: action.value}

        default: return state
    }
}