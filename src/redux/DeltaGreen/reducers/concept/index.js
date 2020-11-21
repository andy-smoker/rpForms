import concepts from "../../ConceptsState"

const concept = (s, a) => {
    return({
        list: s.list,
        concepts: s.concepts
    })
}

export default concept