/*
function showMessage(language , id) {
    switch (language) {
        case 'chinese':
        case 'mandarin':
            console.log(`MOST number of native speakers! ${language} ${id})`);
            break;
        case 'spanish':
            console.log(`2nd place in number of native speakers ${language} ${id}`);
            break;
        case 'english':
            console.log(`3rd place ${language} ${id} `);
            break;
        case 'hindi':
            console.log(`Number 4 ${language} ${id}`);
            break;
        case 'arabic':
            console.log(`5th most spoken language ${language} ${id}`); 
            break;
        default:
            console.log(`Great language too ${language} ${id}`) ;
    }
}

const id = '209410132'
showMessage ('chinese', id);
showMessage ('mandarin', id);
showMessage ('spanish', id);
showMessage ('english', id);
showMessage ('hindi', id);
showMessage ('arabic', id);
showMessage ('japan', id);
*/

/*console.log (209410132);
let averagePopulation = 33;

// use if else if
function showMessage2(country , population) {
    if(population < averagePopulation) {
        console.log (`${country}'s population ${population} is below average (${averagePopulation})`);
    }else if (population > averagePopulation) {
        console.log (`${country}'s population ${population} is above average (${averagePopulation})`);
    }else {
        console.log (`${country}'s population ${population} is equal to average (${averagePopulation})`);
    }

}

//use ternary operator
function showMessage3(country , population) {
    let compare = (population < averagePopulation  ?  'below'  :
                  (population > averagePopulation ) ? 'above'  : 'equal to')
    console.log(`${country}'s population ${population} is ${compare} average (${averagePopulation})`)
    
}


showMessage2 ('taiwan' , 23.29)
showMessage3 ('taiwan' , 23.29)
showMessage2 ('USA' , 328.2)
showMessage3 ('USA' , 328.2)
showMessage2 ('some' , 33)
showMessage3 ('some' , 33)
*/
/*console.log (209410132)
let averagePopulation = 33;

function showMessage3(country , population) {
    let compare = (population < averagePopulation  ?  'below'  :
                  (population > averagePopulation ) ? 'above'  : 'equal to')
    console.log(`${country}'s population ${population} is ${compare} average (${averagePopulation})`)
    
}

const showMessage4 = (country , population) => {
    let compare = (population < averagePopulation  ?  'below'  :
                  (population > averagePopulation ) ? 'above'  : 'equal to')
    console.log(`${country}'s population ${population} is ${compare} average (${averagePopulation})`)
    
}

showMessage3 ('taiwan' , 23.29)
showMessage4 ('taiwan' , 23.29)
showMessage3 ('USA' , 328.2)
showMessage4 ('USA' , 328.2)
showMessage3 ('some' , 33)
showMessage4 ('some' , 33)


function tipCalculator(bill) {
    let tip = ( bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2  )
    return (`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip }`);
}
const tipCalc2 = (bill) => {
    let tip = ( bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2  )
    return (`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip }`);
}

console.log(tipCalculator(275));
console.log(tipCalculator(40));
console.log(tipCalculator(430));

console.log('arrow: ',tipCalculator(275));
console.log('arrow: ',tipCalculator(40));
console.log('arrow: ',tipCalculator(430));
*/
console.log (209410132)
const describeCountry = (country, population, capitalCity) => {
    return (`${country} has ${population} million people and its capital city is ${capitalCity}`)
}

console.log(describeCountry('Taiwan', 23.29, 'Taipei'));
console.log(describeCountry('Korea', 51.64, 'Seoul'));
console.log(describeCountry('Vietnam', 95.54, 'Thành phố Hà Nội'));