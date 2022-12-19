const personGenerator = {
    //Мужские фамилии
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    //Мужские имена
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Олег",
            "id_6": "Владлен",
            "id_7": "Глеб",
            "id_8": "Даниил",
            "id_9": "Давид",
            "id_10": "Денис"
        }
    }`,
    
    //Женкие имена
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алиса",
            "id_2": "Виктория",
            "id_3": "Дина",
            "id_4": "Татьяна",
            "id_5": "Виктория",
            "id_6": "Вероника",
            "id_7": "Карина",
            "id_8": "Диана",
            "id_9": "Валерия",
            "id_10": "Любовь"
        }
    }`,

    //Мужские профессии
    maleProfessiyaJson: `{
        "count": 5,
        "list": {
            "id_1": "Профессор",
            "id_2": "Маляр",
            "id_3": "Хирург",
            "id_4": "Блоггер",
            "id_5": "Строитель"
        }
    }`,

    //Женские професии
    femaleProfessiyaJson: `{
        "count": 5,
        "list": {
            "id_1": "Певица",
            "id_2": "Актриса",
            "id_3": "Фотомодель",
            "id_4": "Уборщица",
            "id_5": "Швея"
        }
    }`,

    //Месяц рождения
    birthMonthJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    //Пол
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    //Генератор пола
    randomGender: function () {
        let gender = this.randomIntNumber();
        return gender === this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    //Генерация фамилии
    randomSurname: function () {
        let surnameMale = this.randomValue(this.surnameJson);
        let surnameFemale = (this.randomValue(this.surnameJson) + `a`);
        if (this.person.gender === this.GENDER_MALE) {
            console.log(surnameMale);
            return surnameMale;
        } else {
            console.log(surnameFemale);
            return surnameFemale;
        }
    },

    //Генератор имени
    randomFirstName: function () {
        let firstNameMale = this.randomValue(this.firstNameMaleJson);
        let firstNameFemale = this.randomValue(this.firstNameFemaleJson);
        if (this.person.gender === this.GENDER_MALE) {
            console.log(firstNameMale);
            return firstNameMale;
        } else {
            console.log(firstNameFemale);
            return firstNameFemale;
        }
    },
     
    //Генерация отчества
    randomSecondName: function () {
        let secondNameMale = this.randomValue(this.firstNameMaleJson) + `ович`;
        let secondNameFemale = (this.randomValue(this.firstNameMaleJson) + `овна`);
        if (this.person.gender === this.GENDER_MALE) {
            console.log(secondNameMale);
            return secondNameMale;
        } else {
            console.log(secondNameFemale);
            return secondNameFemale;
        }
    },

    //Генерация професии
    randomProfessiya: function () {
        let maleProfessiya = this.randomValue(this.maleProfessiyaJson);
        let femaleProfessiya = this.randomValue(this.femaleProfessiyaJson);
        if (this.person.gender === this.GENDER_MALE) {
            console.log(maleProfessiya);
            return maleProfessiya;
        } else {
            console.log(femaleProfessiya);
            return femaleProfessiya;
        }
    },

    //Генерация даты рождения
    randomBirthDate: function () {
        let month = this.randomValue(this.birthMonthJson);
        let day;
        if (month === "февраля") {
            day = this.randomIntNumber(28, 1);
        } else if (month === "апреля" || "июня" || "сентября" || "ноября") { 
            day = this.randomIntNumber(30, 1);
        } else {
            day = this.randomIntNumber(31, 1);
        }
        return day + ' ' + month;
    },

    //Генерация года рождения
    randomBirthYear: function () {
        return this.randomIntNumber(2000, 1980) + ' ' + 'года';
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.secondName = this.randomSecondName();
        this.person.birthDate = this.randomBirthDate();
        this.person.birthYear = this.randomBirthYear();
        this.person.professiya = this.randomProfessiya();
        return this.person;
    }
};
