const studentsMarks= [[80, 70, 55],
    [45, 90, 75],
    [70, 60, 65]];

function calculateQuizResults(studentsMarks){
     let=resultArr = []
    for(let i=0 ; i<studentsMarks.length ; i++){
        let totalMarks =0, pass = 200 ;
        for(let j=0 ; j<studentsMarks.length ; j++){
        totalMarks += studentsMarks[i][j]

        if(totalMarks >= pass){
            resultArr[i] =[totalMarks , 'Pass']
        }else{
            resultArr[i] =[totalMarks ,'fail']
        }
    }
    }
    console.log(resultArr)
}
calculateQuizResults(studentsMarks)