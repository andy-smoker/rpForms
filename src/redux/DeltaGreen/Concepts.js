const concepts = {
    list: [
        {title:"", value:"none"},
        {title:"Антрополог", value:"anthrop"}
    ],
    concepst: {
        none: {
            psyData: {
                bonds: [
                    { tag: 0, value: "", score: 0, parent: "cha" }
                ],
                motiv: { text: "" },
                flaws: { voilence: 0 }
            },
            
            additionslSkillsPoints: {max: 8, current: 8},
            additionslSkills: { },
            
            skillsPoints: { max: 8, current: 8 },
            skills: [
                { name: 'Бух.учет', tag: 'accounting', con: 10, mod: 0, choosed: false},
                { name: 'Бдительность', tag: 'alertness', con: 20, mod: 0, choosed: false},
                { name: 'Антропология', tag: 'anthrop', con: 0, mod: 0, choosed: false },
                { name: 'Археология', tag: 'archeology', con: 0, mod: 0, choosed: false },
                { name: 'Искусство', tag: 'art', con: 0, mod: 0, choosed: false },
                { name: 'Артиллерия', tag: 'artilery', con: 0, mod: 0, choosed: false },
                { name: 'Атлетика', tag: 'athletics', con: 30, mod: 0, choosed: false },
                { name: 'Бюрократия', tag: 'bureauc', con: 10, mod: 0, choosed: false },
                { name: 'Компьютерные науки', tag: 'compscince', con: 0, mod: 0, choosed: false },
                { name: 'Ремесло', tag: 'craft', con: 0, mod: 0, choosed: false },
                { name: 'Криминология', tag: 'crimlog', con: 10, mod: 0, choosed: false },
                { name: 'Разрушение', tag: 'demolitions', con: 0, mod: 0, choosed: false },
                { name: 'Маскировка', tag: 'disguise', con: 10, mod: 0, choosed: false },
                { name: 'Уклонение', tag: 'dodge', con: 30, mod: 0, choosed: false },
                { name: 'Вождение', tag: 'drive', con: 20, mod: 0, choosed: false },
                { name: 'Тяжелая техника', tag: 'havymachine', con: 10, mod: 0, choosed: false },
                { name: 'Стрельба', tag: 'firearms', con: 20, mod: 0, choosed: false },
                { name: 'Первая помощ', tag: 'firstaid', con: 10, mod: 0, choosed: false },
                { name: 'Криминалистика', tag: 'forensic', con: 0, mod: 0, choosed: false },
                { name: 'Тяжелое оружие', tag: 'havyweapon', con: 10, mod: 0, choosed: false },
                { name: 'История', tag: 'history', con: 10, mod: 0, choosed: false },
                { name: 'Проницательность', tag: 'humint', con: 0, mod: 0, choosed: false },
                { name: 'Ложь', tag: 'law', con: 0, mod: 0, choosed: false },
                { name: 'Медицина', tag: 'midicine', con: 0, mod: 0, choosed: false },
                { name: 'Холодное оружее', tag: 'melee', con: 30, mod: 0, choosed: false },
                { name: 'Военное дело', tag: 'military', con: 0, mod: 0, choosed: false },
                { name: 'Навигация', tag: 'navigate', con: 10, mod: 0, choosed: false },
                { name: 'Оккультизм', tag: 'occult', con: 10, mod: 0, choosed: false },
                { name: 'Убеждение', tag: 'persuade', con: 20, mod: 0, choosed: false },
                { name: 'Фармацевтика', tag: 'farmacy', con: 0, mod: 0, choosed: false },
                { name: 'Пилотирование', tag: 'pilot', con: 0, mod: 0, choosed: false },
                { name: 'Психотерапия', tag: 'psycho', con: 10, mod: 0, choosed: false },
                { name: 'Верховая езда', tag: 'ride', con: 10, mod: 0, choosed: false },
                { name: 'Наука', tag: 'Science', con: 0, mod: 0, choosed: false },
                { name: 'Поиск', tag: 'Search', con: 20, mod: 0, choosed: false },
                { name: 'Криптография', tag: 'sigint', con: 0, mod: 0, choosed: false },
                { name: 'Скртыность', tag: 'stealth', con: 10, mod: 0, choosed: false },
                { name: 'Хирургия', tag: 'surgery', con: 0, mod: 0, choosed: false },
                { name: 'Выживания', tag: 'survival', con: 10, mod: 0, choosed: false },
                { name: 'Плаванье', tag: 'anthrop', con: 20, mod: 0, choosed: false },
                { name: 'Драка', tag: 'combat', con: 40, mod: 0, choosed: false },
                { name: 'Необъяснимое', tag: 'unnatural', con: 0, mod: 0, choosed: false },
            ],
        },
        anthrop: {
            psyData: {
                bonds: [
                    { tag: 0, value: "", score: 0, parent: "cha" }
                ],
                motiv: { text: "" },
                flaws: { voilence: 0 }
            },
            
            additionslSkillsPoints: {max: 8, current: 8},
            additionslSkills: [
                {tag: 'archeology', con: 40},
                {tag: 'humint', con: 40},
                {tag: 'navigate', con: 40},
                {tag: 'ride', con: 40},
                {tag: 'search', con: 40},
                {tag: 'survival', con: 40},
             ],
            
            skills: [
                { name: 'Бух.учет', tag: 'accounting', con: 10, mod: 0, choosed: false},
                { name: 'Бдительность', tag: 'alertness', con: 20, mod: 0, choosed: false},
                { name: 'Антропология', tag: 'anthrop', con: 0, mod: 0, choosed: false },
                { name: 'Археология', tag: 'archeology', con: 0, mod: 0, choosed: false },
                { name: 'Искусство', tag: 'art', con: 0, mod: 0, choosed: false },
                { name: 'Артиллерия', tag: 'artilery', con: 0, mod: 0, choosed: false },
                { name: 'Атлетика', tag: 'athletics', con: 30, mod: 0, choosed: false },
                { name: 'Бюрократия', tag: 'bureauc', con: 10, mod: 0, choosed: false },
                { name: 'Компьютерные науки', tag: 'compscince', con: 0, mod: 0, choosed: false },
                { name: 'Ремесло', tag: 'craft', con: 0, mod: 0, choosed: false },
                { name: 'Криминология', tag: 'crimlog', con: 10, mod: 0, choosed: false },
                { name: 'Разрушение', tag: 'demolitions', con: 0, mod: 0, choosed: false },
                { name: 'Маскировка', tag: 'disguise', con: 10, mod: 0, choosed: false },
                { name: 'Уклонение', tag: 'dodge', con: 30, mod: 0, choosed: false },
                { name: 'Вождение', tag: 'drive', con: 20, mod: 0, choosed: false },
                { name: 'Тяжелая техника', tag: 'havymachine', con: 10, mod: 0, choosed: false },
                { name: 'Стрельба', tag: 'firearms', con: 20, mod: 0, choosed: false },
                { name: 'Первая помощ', tag: 'firstaid', con: 10, mod: 0, choosed: false },
                { name: 'Криминалистика', tag: 'forensic', con: 0, mod: 0, choosed: false },
                { name: 'Тяжелое оружие', tag: 'havyweapon', con: 10, mod: 0, choosed: false },
                { name: 'История', tag: 'history', con: 10, mod: 0, choosed: false },
                { name: 'Проницательность', tag: 'humint', con: 0, mod: 0, choosed: false },
                { name: 'Ложь', tag: 'law', con: 0, mod: 0, choosed: false },
                { name: 'Медицина', tag: 'midicine', con: 0, mod: 0, choosed: false },
                { name: 'Холодное оружее', tag: 'melee', con: 30, mod: 0, choosed: false },
                { name: 'Военное дело', tag: 'military', con: 0, mod: 0, choosed: false },
                { name: 'Навигация', tag: 'navigate', con: 10, mod: 0, choosed: false },
                { name: 'Оккультизм', tag: 'occult', con: 10, mod: 0, choosed: false },
                { name: 'Убеждение', tag: 'persuade', con: 20, mod: 0, choosed: false },
                { name: 'Фармацевтика', tag: 'farmacy', con: 0, mod: 0, choosed: false },
                { name: 'Пилотирование', tag: 'pilot', con: 0, mod: 0, choosed: false },
                { name: 'Психотерапия', tag: 'psycho', con: 10, mod: 0, choosed: false },
                { name: 'Верховая езда', tag: 'ride', con: 10, mod: 0, choosed: false },
                { name: 'Наука', tag: 'Science', con: 0, mod: 0, choosed: false },
                { name: 'Поиск', tag: 'Search', con: 20, mod: 0, choosed: false },
                { name: 'Криптография', tag: 'sigint', con: 0, mod: 0, choosed: false },
                { name: 'Скртыность', tag: 'stealth', con: 10, mod: 0, choosed: false },
                { name: 'Хирургия', tag: 'surgery', con: 0, mod: 0, choosed: false },
                { name: 'Выживания', tag: 'survival', con: 10, mod: 0, choosed: false },
                { name: 'Плаванье', tag: 'anthrop', con: 20, mod: 0, choosed: false },
                { name: 'Драка', tag: 'combat', con: 40, mod: 0, choosed: false },
                { name: 'Необъяснимое', tag: 'unnatural', con: 0, mod: 0, choosed: false },
            ],
        },





        patterns: [
            { title: "", value: "none", check: false },
            { title: "Антрополог", value: "anthrop", check: false },
            { title: "Историк", value: "historian", check: false },
            { title: "Компьютерщик", value: "comp", check: false },
            { title: "Инженер", value: "engin", check: false },
            { title: "Федерал", value: "federal", check: false },
            { title: "Врач", value: "psysician", check: false },
            { title: "Ученый", value: "scientist", check: false },
            { title: "Специалист", value: "spcial", check: false },
            { title: "Преступник", value: "criminal", check: false },
            { title: "Стрелок", value: "fire", check: false },
            { title: "Дипломат", value: "foreing", check: false },
            { title: "Аналитик разведки", value: "analyst", check: false },
            { title: "Офицер разведки", value: "", check: false },
            { title: "Юрист", value: "lawyer", check: false },
            { title: "Бизнесмен", value: "buisiness", check: false },
            { title: "Медиа", value: "media", check: false },
            { title: "Парамедик", value: "paramedic", check: false },
            { title: "Мед.брат/сестра", value: "nurse", check: false },
            { title: "Пилот", value: "pilot", check: false },
            { title: "Судоводитель", value: "sailor", check: false },
            { title: "Офицер полиции", value: "police", check: false },
            { title: "Организатор", value: "manager", check: false },
            { title: "Солдат", value: "slosger", check: false },
            { title: "Моряк", value: "marine", check: false },
        ]
    }
}

export default concepts