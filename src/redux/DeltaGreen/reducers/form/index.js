import { perData } from "./perData"
import { psyData } from "./psyData"
import { skills } from "./skills"
import { statData } from "./statData"
import {points} from './skillPoints'

export const form = (s, a, actions) => {
    return ({
            statData: statData(s.statData, a, actions.stat),
            perData: perData(s.perData, a, actions.per),
            psyData: psyData(s.psyData, a, actions.psy),
            skills: skills({
                skills:s.skills,
                points: s.skillsPoints
            }, a, actions.skills),
            skillsPoints: points(s.skillsPoints, a, actions.SKILL_POINTS),
            
        
    })
}