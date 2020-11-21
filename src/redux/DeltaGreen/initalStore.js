const formState = {
    
        statData: {
            stats: [
                { view: "Сила (STR)", tag: "strg", count: 0, dist: "" },
                { view: "Тело (CON)", tag: "con", count: 0,  dist: "" },
                { view: "Ловкость (DEX)", tag: "dex", count: 0,  dist: "" },
                { view: "Интеллект (INT)", tag: "int", count: 0,  dist: "" },
                { view: "Воля (POW)", tag: "pow", count: 0,  dist: "" },
                { view: "Харизма (CHA)", tag: "cha", count: 0,  dist: "" }
            ],
            attribs: [
                {title:"ЖИЗНЬ (HP)", value:"", tag:"hp", parent:"con" },
                {title:"СИЛА ВОЛИ (WP)", value:"", tag:"wp", parent:"pow"},
                {title:"РАССУДОК (SAN)", value: "", tag:"san", parent:"pow"},
                {title:"ТОЧКА СЛОВМА (BP)", value: "", tag:"bp", parent:"pow"}
            ]
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
            {title:"OБРАЗОВАНИЕ",tag:"occup", value:'', type:"textarea"}
        ],
        psyData: {
            
            bonds: [
                {tag:0, value: "", score: 0, parent:"cha" }
            ],
            motiv: { text: "" },
            flaws: { voilence: 0 }
        },
        skillsPoints: {max: 8, current:8},
        skills: [
            { name: 'Бух.учет', tag: 'accounting', con: 10 , mod:0},
            { name: 'Бдительность', tag: 'alertness', con: 20, mod:0},
            { name: 'Антропология', tag: 'anthrop', con: 0, mod:0},
            { name: 'Археология', tag: 'archeology', con: 0, mod:0},
            { name: 'Искусство', tag: 'art', con: 0, mod:0},
            { name: 'Артиллерия', tag: 'artilery', con: 0, mod:0},
            { name: 'Атлетика', tag: 'athletics', con: 30, mod:0},
            { name: 'Бюрократия', tag: 'bureauc', con: 10, mod:0},
            { name: 'Компьютерные науки', tag: 'compscince', con: 0, mod:0},
            { name: 'Ремесло', tag: 'craft', con: 0, mod:0},
            { name: 'Криминология', tag: 'crimlog', con: 10, mod:0},
            { name: 'Разрушение', tag: 'demolitions', con: 0, mod:0},
            { name: 'Маскировка', tag: 'disguise', con: 10, mod:0},
            { name: 'Уклонение', tag: 'dodge', con: 30, mod:0},
            { name: 'Вождение', tag: 'drive', con: 20, mod:0},
            { name: 'Тяжелая техника', tag: 'havymachine', con: 10, mod:0},
            { name: 'Стрельба', tag: 'firearms', con: 20, mod:0},
            { name: 'Первая помощ', tag: 'firstaid', con: 10, mod:0},
            { name: 'Криминалистика', tag: 'forensic', con: 0, mod:0},
            { name: 'Тяжелое оружие', tag: 'havyweapon', con: 10, mod:0},
            { name: 'История', tag: 'history', con: 10, mod:0},
            { name: 'Проницательность', tag: 'humint', con: 0, mod:0},
            { name: 'Ложь', tag: 'law', con: 0,mod:0},
            { name: 'Медицина', tag: 'midicine', con: 0, mod:0},
            { name: 'Холодное оружее', tag: 'melee', con: 30, mod:0},
            { name: 'Военное дело', tag: 'military', con: 0, mod:0},
            { name: 'Навигация', tag: 'navigate', con: 10, mod:0},
            { name: 'Оккультизм', tag: 'occult', con: 10, mod:0},
            { name: 'Убеждение', tag: 'persuade', con: 20, mod:0},
            { name: 'Фармацевтика', tag: 'farmacy', con: 0,mod:0},
            { name: 'Пилотирование', tag: 'pilot', con: 0, mod:0},
            { name: 'Психотерапия', tag: 'psycho', con: 10, mod:0},
            { name: 'Верховая езда', tag: 'ride', con: 10, mod:0},
            { name: 'Наука', tag: 'Science', con: 0, mod:0},
            { name: 'Поиск', tag: 'Search', con: 20, mod:0},
            { name: 'Криптография', tag: 'sigint', con: 0, mod:0},
            { name: 'Скртыность', tag: 'stealth', con: 10, mod:0},
            { name: 'Хирургия', tag: 'surgery', con: 0, mod:0},
            { name: 'Выживания', tag: 'survival', con: 10, mod:0},
            { name: 'Плаванье', tag: 'anthrop', con: 20,mod:0},
            { name: 'Драка', tag: 'combat', con: 40, mod:0},
            { name: 'Необъяснимое', tag: 'unnatural', con: 0, mod:0},
        ],
        patterns: [
            {title: "", value:"none", check: true},
            {title: "Антрополог", value:"anthrop", check: false},
            {title: "Историк", value:"historian", check: false},
            {title: "Компьютерщик", value:"comp", check: false},
            {title: "Инженер", value:"engin", check: false},
            {title: "Федерал", value:"federal", check: false},
            {title: "Врач", value:"psysician", check: false},
            {title: "Ученый", value:"scientist", check: false},
            {title: "Специалист", value:"spcial", check: false},
            {title: "Преступник", value:"criminal", check: false},
            {title: "Стрелок", value:"fire", check: false},
            {title: "Дипломат", value:"foreing", check: false},
            {title: "Аналитик разведки", value:"analyst", check: false},
            {title: "Офицер разведки", value:"", check: false},
            {title: "Юрист", value:"lawyer", check: false},
            {title: "Бизнесмен", value:"buisiness", check: false},
            {title: "Медиа", value:"media", check: false},
            {title: "Парамедик", value:"paramedic", check: false},
            {title: "Мед.брат/сестра", value:"nurse", check: false},
            {title: "Пилот", value:"pilot", check: false},
            {title: "Судоводитель", value:"sailor", check: false},
            {title: "Офицер полиции", value:"police", check: false},
            {title: "Организатор", value:"manager", check: false},
            {title: "Солдат", value:"slosger", check: false},
            {title: "Моряк", value:"marine", check: false},
        ]
    
}

export default formState