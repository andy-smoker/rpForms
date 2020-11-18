import { perData } from "./perData"
import { psyData } from "./psyDAta"
import { skills } from "./skills"
import { statData } from "./statData"
import {points} from './skillPoints'

export const form = (s, a) => {
    return ({
        form: {
            statData: statData(s.form.statData, a),
            perData: perData(s.form.perData, a),
            psyData: psyData(s.form.psyData, a),
            skillsPoints: points(s.form.skillsPoints, a),
            skills: skills({
                skills:s.form.skills,
                points: s.form.skillsPoints
            }, a),
        }
    })
}