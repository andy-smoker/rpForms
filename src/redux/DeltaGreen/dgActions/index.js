import perData from './PerData'
import psyData from './PsyData'
import statData from './StatData'
import skills from './SkillSets'
import points from './points'
import actions from '../actions'

const CHOOSE_CONCEPT = (tag, value) => {
    return {
        type: actions.CHOOSE_COCEPT,
        tag: tag,
    }
}

export default {
    CHOOSE_CONCEPT,
    perData,
    psyData,
    statData,
    skills,
    points
}