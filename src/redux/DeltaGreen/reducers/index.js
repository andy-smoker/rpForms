import { perData } from "./perData"
import { psyData } from "./psyDAta"
import { skills } from "./skills"
import { statData } from "./statData"

export const form = (s, a) => {
    return ({
        form: {
            statData: statData(s.form.statData, a),
            perData: perData(s.form.perData, a),
            psyData: psyData(s.form.psyData, a),
            skills: skills(s.form.skills, a)
        }
    })
}