import { perData } from "./perData"
import { psyData } from "./psyDAta"
import { skills } from "./skills"
import { statData } from "./form/statData"
import {points} from './skillPoints'

export const form = (s, a) => {
    return ({
            statData: statData(s.statData, a),
            perData: perData(s.perData, a),
            psyData: psyData(s.psyData, a),
            skills: skills({
                skills:s.skills,
                points: s.skillsPoints
            }, a),
            skillsPoints: points(s.skillsPoints, a),
            
        
    })
}