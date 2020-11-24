import {combineReducers} from 'redux'
import formState from './initalStore'
import {form as formStore} from './reducers/form'
import conceptsState from './ConceptsState'
import conStore from './reducers/concept'
import actions from './actions'

const concept = (s = conceptsState, a) => {
    return conStore(s,a)
}

const form = (s = formState, a) => {
    debugger
    switch (a.type) {
        case actions.per.CHOOSE_COCEPT:
            (conceptsState.list).some(e => {
                debugger
                return e.value == a.tag ? e.choose = true : e.choose = false
                 
            })
            s.psyData.bonds = conceptsState.concepts[a.tag].psyData.bonds
            s.skillsPoints = conceptsState.concepts[a.tag].skillsPoints
            s.additionslSkillsPoints = conceptsState.concepts[a.tag].additionslSkillsPoints
            s.skills = conceptsState.concepts[a.tag].skills
            s.otherSkills = conceptsState.concepts[a.tag].otherSkills
            break;
    
        default:
            break;
    }
    return formStore(s, a, actions)
}

const deltagreen = combineReducers({
    form,
    concept
})

export default deltagreen