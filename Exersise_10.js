const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng', 'fu', 'erg'],
        programmingLangs: {
            js: '20%',
            php: '10%',

        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const {age} = plan;
        let {languages} = plan.skills;
        let res = '';
        
        for( let i = 0; i < languages.length; i++ ) {
            res += `${languages[i]} `;
        }
        return `Мне ${age} и я владею языками: ${res.toLocaleUpperCase()}`;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));



function showExperience (obj) {
   const {exp} = obj.skills;
   return exp;
    
}

console.log(showExperience(personalPlanPeter));

function showProgramingLang (lang) {
    const {programmingLangs} = lang.skills;
    let string = '';

    for(let key in programmingLangs) {
        string += `Язык ${key} изучен на ${programmingLangs[key]} \n`;
    }

    return string;

}

console.log(showProgramingLang (personalPlanPeter));

