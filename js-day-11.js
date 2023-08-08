//  Ques1
// function convTemp(temperature , unit){
//     const celcius = 'C'
//     const fahernheit = 'F'
//     if(unit ==='C'){
//         const fahernheitTemperature =  (temperature * 9/5) + 32
//         return fahernheitTemperature
//     }else if(unit==='F'){
//         const celciusTemperature = (temperature - 32) * 5/9
//         return celciusTemperature
//     }else{
//         return temperature
//     }
// }
// console.log(convTemp(98.6,'F'))
const subjectMarks ={
    math: 60,
    science: 70,
    history: 55,
    english: 75,
    art: 65
};

function calculateAvarageAndPercentage(subjectMarks){
    const {math , science ,history , english ,art} = subjectMarks;
    const sum = math+science+history+english+art;
    const calculateAvarage = sum /5;
    const calculatePercentage = sum/400*100

    return {calculateAvarage , calculatePercentage}
    
};
const result = calculateAvarageAndPercentage(subjectMarks)
console.log(result)