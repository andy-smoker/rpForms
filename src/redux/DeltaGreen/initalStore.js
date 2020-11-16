const state = {
    form: {
        statData: {
            stats: [
                { view: "Сила (STR)", tag: "strg", count: 0 },
                { view: "Тело (CON)", tag: "con", count: 0 },
                { view: "Ловкость (DEX)", tag: "dex", count: 0 },
                { view: "Интеллект (INT)", tag: "int", count: 0 },
                { view: "Воля (POW)", tag: "pow", count: 0 },
                { view: "Харизма (CHA)", tag: "cha", count: 0 }
            ],
            attribs: {
                hp: { value: "", tag: "hp" },
                wp: { value: "", tag: "wp" },
                san: { value: "", tag: "san" },
                bp: { value: "", tag: "bp" }
            }
        },

        perData: [
            {title:"ФИО",tag:"name", value:'', type:"text"},
            {title:"КУРАТОР",tag:"curator", value:'', type:"text"},
            {title:"ПРОФЕССИЯ",tag:"prof", value:'', type:"text"},
            {title:"НАЦИОНАЛЬНОСТЬ",tag:"nation", value:'', type:"text"},
            {title:"ВОЗРАСТ",tag:"age", value:'', type:"text"},
            {title:"ПОЛ",tag:"gender", value:[
                {title:"М", value:"male", check:false},
                {title:"Ж", value:"female", check:false}
            ], type:"radio"},
            {title:"ВНЕШНОСТЬ",tag:"look", value:'', type:"textarea"},
            {title:"OБРФЗОВАНИЕ",tag:"occup", value:'', type:"textarea"}
        ],
        psyData: {
            bonds: [
                { name: "", score: 0 }
            ],
            motiv: { text: "" },
            flaws: { voilence: 0 }
        },
        skillsPoints: 4,
        skills: [
            { name: 'Бух.учет', tag: 'accounting', con: 10 },
            { name: 'Бдительность', tag: 'alertness', con: 20 },
            { name: 'Антропология', tag: 'anthrop', con: 0 },
            { name: 'Археология', tag: 'archeology', con: 0 },
            { name: 'Искусство', tag: 'art', con: 0 },
            { name: 'Артиллерия', tag: 'artilery', con: 0 },
            { name: 'Атлетика', tag: 'athletics', con: 30 },
            { name: 'Бюрократия', tag: 'bureauc', con: 10 },
            { name: 'Компьютерные науки', tag: 'compscince', con: 0 },
            { name: 'Ремесло', tag: 'craft', con: 0 },
            { name: 'Криминология', tag: 'crimlog', con: 10 },
            { name: 'Разрушение', tag: 'demolitions', con: 0 },
            { name: 'Маскировка', tag: 'disguise', con: 10 },
            { name: 'Уклонение', tag: 'dodge', con: 30 },
            { name: 'Вождение', tag: 'drive', con: 20 },
            { name: 'Тяжелая техника', tag: 'havymachine', con: 10 },
            { name: 'Стрельба', tag: 'firearms', con: 20 },
            { name: 'Первая помощ', tag: 'firstaid', con: 10 },
            { name: 'Криминалистика', tag: 'forensic', con: 0 },
            { name: 'Тяжелое оружие', tag: 'havyweapon', con: 10 },
            { name: 'История', tag: 'history', con: 10 },
            { name: 'Проницательность', tag: 'humint', con: 0 },
            { name: 'Ложь', tag: 'law', con: 0 },
            { name: 'Медицина', tag: 'midicine', con: 0 },
            { name: 'Холодное оружее', tag: 'melee', con: 30 },
            { name: 'Военное дело', tag: 'military', con: 0 },
            { name: 'Навигация', tag: 'navigate', con: 10 },
            { name: 'Оккультизм', tag: 'occult', con: 10 },
            { name: 'Убеждение', tag: 'persuade', con: 20 },
            { name: 'Фармацевтика', tag: 'farmacy', con: 0 },
            { name: 'Пилотирование', tag: 'pilot', con: 0 },
            { name: 'Психотерапия', tag: 'psycho', con: 10 },
            { name: 'Верховая езда', tag: 'ride', con: 10 },
            { name: 'Наука', tag: 'Science', con: 0 },
            { name: 'Поиск', tag: 'Search', con: 20 },
            { name: 'Криптография', tag: 'sigint', con: 0 },
            { name: 'Скртыность', tag: 'stealth', con: 10 },
            { name: 'Хирургия', tag: 'surgery', con: 0 },
            { name: 'Выживания', tag: 'survival', con: 10 },
            { name: 'Плаванье', tag: 'anthrop', con: 20 },
            { name: 'Драка', tag: 'combat', con: 40 },
            { name: 'Необъяснимое', tag: 'unnatural', con: 0 },
        ]
    }
}

export default state